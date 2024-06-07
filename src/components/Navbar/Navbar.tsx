import { FC } from "react";
import { NavItem } from "src/components/NavItem";
import { INavbar } from "./Navbar.types";
import * as Style from "./Navbar.styles";

const Navbar: FC<INavbar> = ({items}: INavbar ) => {
    return (
        <Style.NavList>
            {items.map(navItem => <NavItem {...navItem} key={navItem.route} />)}
        </Style.NavList>
    )
};

export {Navbar};