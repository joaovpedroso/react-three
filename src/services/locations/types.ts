import { ThreeItem } from "src/components/ThreeList/ThreeList.types"

export interface IGetLocation {
    companyId: string
}

export interface ILocation extends ThreeItem {
    id: string,
    name: string,
    parentId: string | null
}
