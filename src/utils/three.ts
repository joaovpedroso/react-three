import { IThreeItem } from "src/components/ThreeList/ThreeList.types";

const findChildrens = (parentId: string, items: IThreeItem[] ) => {
    return items.filter(filho => filho.parentId === parentId);
}

const sortChildrens = (item: IThreeItem) => {

    if( !item.childrens ) return 1;

    if( item.childrens.length > 0 ) return -1;

    return 0;
}

const getThreeArray = (itens: IThreeItem[]): IThreeItem[] => {

    const itensFilho = itens.filter(item => item.parentId);
    const paiPrimeiroNivel = itens.filter(item => !item.parentId);

    const groupedByChildrens = itens.map(pai => {
        const algumFilhoComSeuId = findChildrens(pai.id, itensFilho);

        if( algumFilhoComSeuId.length < 1 )
            return null;

        return {
            ...pai,
            childrens: [
                ...algumFilhoComSeuId
            ]
        };
    }).filter(item => item?.id) as IThreeItem[];

    const listItems = paiPrimeiroNivel.map(paiNivelUm => {
        const seusFilhos = findChildrens(paiNivelUm.id, groupedByChildrens);

        return {
            ...paiNivelUm,
            childrens: [
                ...seusFilhos
            ]
        };
    });


    const ordenedArrayByChildrens = listItems.sort(sortChildrens);

    return ordenedArrayByChildrens
};

export {getThreeArray};