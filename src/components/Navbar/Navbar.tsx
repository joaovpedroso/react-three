import { FC } from "react";
import { NavItem } from "src/components/NavItem";
import { INavbar } from "./Navbar.types";
import * as Style from "./Navbar.styles";

const Navbar: FC<INavbar> = ({items, onSelectItem}: INavbar ) => {
    return (
        <Style.NavList>
            {items.map(navItem => <NavItem key={navItem.id} item={navItem} handleSelectItem={onSelectItem} />)}
        </Style.NavList>
    )
};

export {Navbar};