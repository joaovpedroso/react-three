/* eslint-disable @typescript-eslint/no-explicit-any */
import { IThreeItem } from "src/components/ThreeList/ThreeList.types";
import { IAssets } from "src/services/assets/types";
import { ILocation } from "src/services/locations/types";
import { TPropNames } from "./types";

const sortChildrens = (item: IAssets | ILocation) => {

    if( !item.childrens ) return 1;

    if( item.childrens.length > 0 ) return -1;

    return 0;
}

const getAssetsThree = (assets: IAssets[]) => {
    const semParentID = assets.filter(asset => !asset.parentId);
    const comParentID = assets.filter(asset => asset.parentId);

    const comParentIDFilhos = comParentID.map(asset => {
        const childrens = assets.filter(currentAsset => currentAsset.parentId === asset.id)
        return {
            ...asset,
            childrens
        }
    })

    const paisComFilhos = semParentID.map(asset => {
        const childrens = comParentIDFilhos.filter(currentAsset => currentAsset.parentId === asset.id)
        return {
            ...asset,
            childrens
        }
    })

    return paisComFilhos;
}

const getLocationsThree = (locations: ILocation[]) => {
    const semParentID = locations.filter(location => !location.parentId);
    const comParentID = locations.filter(location => location.parentId);

    const comParentIDFilhos = comParentID.map(location => {
        const childrens = locations.filter(currentLocation => currentLocation.parentId === location.id)
        return {
            ...location,
            childrens
        }
    })

    const paisComFilhos = semParentID.map(location => {
        const childrens = comParentIDFilhos.filter(currentLocation => currentLocation.parentId === location.id)
        return {
            ...location,
            childrens
        }
    })

    return paisComFilhos;
}

const groupAssetsWithLocation = (locations: ILocation[], assets: IAssets[]): ILocation[] => {
    return locations.map(location => {
        if( location.childrens && location.childrens.length > 0 )
            return {...location, childrens: groupAssetsWithLocation(location.childrens, assets)} as ILocation;

        return {
            ...location,
            childrens: assets.filter(asset => asset.locationId === location.id)
        };
    })
}

const getUniqueAssets = (assets: IAssets[]) => {
    return assets.filter(asset => !asset.locationId && !asset.parentId)
}

const getThreeArray = (locations: ILocation[], assets: IAssets[]) => {

    const uniqueAsset = getUniqueAssets(assets);

    const locationsThree = getLocationsThree(locations);

    if( uniqueAsset.length === assets.length ){
        return [
            ...uniqueAsset,
            ...locationsThree
        ].sort(sortChildrens);
    }

    const assetsThree = getAssetsThree(assets);

    const groupedLocations = [...groupAssetsWithLocation(locationsThree, assetsThree), ...uniqueAsset]


    return groupedLocations.sort(sortChildrens);
}

const isSelected = ( item: any, propName: TPropNames, searchTerm: string): boolean => {
    return item[propName]?.toLowerCase().includes(searchTerm?.toLowerCase())
}

const findRecursiveItem = (item: IAssets | ILocation, searchTerm: string, propName: TPropNames): IAssets | ILocation | null => {

    if( isSelected(item, propName, searchTerm) )
        return item;

    if (item.childrens) {
        const childrens: IAssets[] | ILocation[] = [];
        
        item.childrens.forEach(child => {
            const result = findRecursiveItem(child, searchTerm, propName) as never;

            if (result)
                childrens.push(result);

            return null;
        })

        if( childrens && childrens.length > 0 ) {
            return {
                ...item,
                childrens
            };
        }
    }

    return null;
} 

const  filterBySearchTerm = (itens:IThreeItem[], searchTerm: string) => {
    const results: IAssets[] | ILocation[] = [];

    itens.forEach(item => {
        const result = findRecursiveItem(item, searchTerm, "name") as never;
        if (result) 
            results.push(result);
                
    })

    return results;
}

const filterBySituation = (itens: IThreeItem[], param: TPropNames, searchValue: string) => {
    const results: IAssets[] | ILocation[] = [];

    itens.forEach(item => {
        const result = findRecursiveItem(item, searchValue, param) as never;
        if (result) 
            results.push(result);
                
    })

    return results;
}

export {getThreeArray, filterBySearchTerm, filterBySituation};