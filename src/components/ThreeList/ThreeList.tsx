import { FC, useMemo } from "react";
import { IThreeList, IThreeItem } from "./ThreeList.types";
import * as Style from './ThreeList.style';
import { ThreeItem } from "src/components/ThreeItem";
import { Location } from "src/assets/icons/outlined";

const ThreeList: FC<IThreeList> = ({itens}: IThreeList) => {

    const validateChildrens = (item: IThreeItem) => {

        if( !item.childrens ) return 1;

        if( item.childrens.length > 0 ) return -1;

        return 0;
    }

    const findChildrens = (parentId: string, items: IThreeItem[] ) => {
        return items.filter(filho => filho.parentId === parentId);
    }

    const formatedListItems: IThreeItem[] = useMemo(() => {

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


        const ordenedArrayByChildrens = listItems.sort(validateChildrens);

        return ordenedArrayByChildrens
    }, [itens]);   
    
    const renderItemsList = (item: IThreeItem, isChildren = false) => {

        const hasChildrens = item?.childrens && item.childrens.length > 0;
        
        
        const childrens = hasChildrens ? item.childrens as IThreeItem[] : [];
                
        return (
            <Style.ThreeListContainer isChildren={isChildren}>
                <ThreeItem.Item key={item.id} hasChildren={hasChildrens}>
                    <ThreeItem.Icon>
                        <Location color="#2188FF" />
                    </ThreeItem.Icon>         
    
                    <ThreeItem.Label>{item.name}</ThreeItem.Label>
                </ThreeItem.Item>
    
                {hasChildrens ? childrens.map(threeItem => renderItemsList(threeItem, true)) : null}
            </Style.ThreeListContainer>
        )
    };

    return (
        <Style.ThreeListContainer>
            {formatedListItems.map(threeItem => renderItemsList(threeItem))}
        </Style.ThreeListContainer>
    )
};

export {ThreeList};