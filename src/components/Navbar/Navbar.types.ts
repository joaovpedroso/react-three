import { INavItem } from "../NavItem/NavItem.types";

export interface INavbar {
    items: INavItem[]
    onSelectItem: (item: INavItem) => void
}
