import { IAssets } from "src/services/assets/types";
import { ILocation } from "src/services/locations/types";

export type TPropNames = keyof IAssets | keyof ILocation;
