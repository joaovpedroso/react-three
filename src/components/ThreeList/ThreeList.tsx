import { FC } from "react";
import { IThreeList } from "./ThreeList.types";
import * as Style from './ThreeList.style';
import { ThreeItem } from "src/components/ThreeItem";
import { Location } from "src/assets/icons/outlined";

const ThreeList: FC<IThreeList> = ({itens}: IThreeList) => (
    <Style.ThreeListContainer>
        {itens.map(threeItem => {

            const hasChildrens = threeItem?.childrens && threeItem.childrens.length > 0;

            return (
                <Style.ThreeListContainer key={threeItem.id} $isChildren={!!threeItem.parentId}>
                    <ThreeItem.Item key={threeItem.id} hasChildren={hasChildrens}>
                        <ThreeItem.Icon>
                            <Location color="#2188FF" />
                        </ThreeItem.Icon>         

                        <ThreeItem.Label>{threeItem.name}</ThreeItem.Label>
                    </ThreeItem.Item>
                    {hasChildrens && threeItem.childrens && (
                        <ThreeList itens={threeItem.childrens} />
                    )}
                </Style.ThreeListContainer>
            );
        })}
    </Style.ThreeListContainer>
)
export {ThreeList};