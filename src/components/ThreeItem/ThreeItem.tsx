import { FC, useState } from "react";
import { Down } from "src/assets/icons/outlined";
import { IThreeItem } from "./ThreeItem.types";
import * as Style from './ThreeItem.style';

const ThreeItemComponent: FC<IThreeItem> = ({ hasChildren = false, children }: IThreeItem) => {

    const [hasClosed, setHasClosed] = useState(false);

    const handleCollapseOptions = () => {
        setHasClosed(collapsed => !collapsed);
    }

    return (
        <Style.ThreeItemContainer onClick={handleCollapseOptions}>

            <Style.ThreeItemIndicator $rotate={hasClosed}>
                {hasChildren && <Down color="#17192D" />}
            </Style.ThreeItemIndicator>

            {children}          
        </Style.ThreeItemContainer>
    );
};


const ThreeItem = {
    Item: ThreeItemComponent,
    Icon: Style.ThreeItemIconWrapper,
    Label: Style.ThreeItemLabel,
}

export {ThreeItem};

