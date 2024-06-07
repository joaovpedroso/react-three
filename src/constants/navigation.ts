import { INavItem } from "../components/NavItem/NavItem.types";

const NAV_ITEMS: INavItem[] = [
    {
        label: "Apex Unit",
        route: "/",
        active: true,
    },
    {
        label: "Tobias Unit ",
        route: "#",
        active: false,
    },
    {
        label: "Jaguar Unit",
        route: "",
        active: false,
    }
];

export {NAV_ITEMS};