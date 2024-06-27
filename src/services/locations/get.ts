import { api } from "../api";
import { IGetLocation, ILocation } from "./types";

const getLocations = ({ companyId }: IGetLocation): Promise<ILocation[]> => api.get(`/companies/${companyId}/locations`);

export {getLocations};