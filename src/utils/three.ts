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

const eSelecionado = (name: string, searchTerm: string) => {
    return name.toLowerCase().includes(searchTerm.toLowerCase())
}

const findRecursiveItem = (item: IThreeItem, searchTerm: string): IThreeItem | null => {
    if (eSelecionado(item.name, searchTerm)) 
        return item;

    if (item.childrens) {
        const childrens: IThreeItem[] = [];
        
        item.childrens.forEach(child => {
            const result = findRecursiveItem(child, searchTerm);
            if (result)
                childrens.push(result);
            

            return null;
        })

        if( childrens && childrens.length > 0 )
            return {
                ...item,
                childrens
            };
    }

    return null;
} 

const  filterThreeItensBySearchTerm = (itens: IThreeItem[], searchTerm: string) => {
    const results: IThreeItem[] = [];

    itens.forEach(item => {
        const result = findRecursiveItem(item, searchTerm);
        if (result) 
            results.push(result);
                
    })

    return results;
}

const filterThreeItens = (itens: IThreeItem[], searchTerm: string) => {
   return filterThreeItensBySearchTerm(itens, searchTerm)
}

export {getThreeArray, filterThreeItens};