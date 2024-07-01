import { ICompany } from "src/services/companies/types";

export interface INavItem extends ICompany{
    active: boolean
}

export interface INavItemProps {
    item: INavItem,
    handleSelectItem: (item: INavItem) => void
}