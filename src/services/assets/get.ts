import { api } from "../api";
import { IGetLocation } from "../locations/types";
import { IAssets } from "./types";

const getAssets = ({ companyId }: IGetLocation): Promise<IAssets[]> => api.get(`/companies/${companyId}/assets`);

export {getAssets};