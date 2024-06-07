export interface IThreeItem {
    id: string;
    name: string;
    parentId: string | null;
    childrens?: IThreeItem[]
}

export interface IThreeList {
    itens: IThreeItem[]
}