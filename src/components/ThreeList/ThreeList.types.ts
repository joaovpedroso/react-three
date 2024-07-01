import { IAssets } from "src/services/assets/types";
import { ILocation } from "src/services/locations/types";

export interface ThreeItem {
    childrens?: IAssets[] | ILocation[]
}

export interface IThreeItem {
    id: string;
    name: string;
    parentId: string | null;
    childrens?: IThreeItem[]
}

export interface IThreeList {
    itens: IThreeItem[]
}