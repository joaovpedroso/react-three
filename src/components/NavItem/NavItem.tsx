import { FC } from "react";
import { INavItemProps } from "./NavItem.types";
import Icon from './assets/icon.svg';
import * as Styled from "./NavItem.styles";


const NavItem: FC<INavItemProps> = ({item, handleSelectItem}: INavItemProps) => (
    <Styled.NavigationItem $active={item.active} onClick={() => handleSelectItem(item)}>
        <img src={Icon} alt="Ícone de pirâmide" />
        {item.name}
    </Styled.NavigationItem>
);

export {NavItem};