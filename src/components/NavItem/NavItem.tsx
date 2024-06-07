import { FC } from "react";
import { INavItem } from "./NavItem.types";
import Icon from './assets/icon.svg';
import * as Styled from "./NavItem.styles";


const NavItem: FC<INavItem> = (item: INavItem) => (
    <Styled.NavigationItem $active={item.active}>
        <img src={Icon} alt="Ícone de pirâmide" />
        {item.label}
    </Styled.NavigationItem>
);

export {NavItem};