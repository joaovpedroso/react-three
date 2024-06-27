import { ThreeItem } from "src/components/ThreeList/ThreeList.types";

export interface IAssets extends ThreeItem{
    "gatewayId": string,
    "id": string,
    "locationId": string | null,
    "name": string,
    "parentId": string | null,
    "sensorId": string | null,
    "sensorType": EnumSensorType | null,
    "status": EnumAssetStatus | null
}

enum EnumSensorType {
    energy = 'energy',
    vibration = 'vibration',
}

enum EnumAssetStatus {
    alert = 'alert',
    operating = 'operating'
}