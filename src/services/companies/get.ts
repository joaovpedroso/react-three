import { api } from "../api";
import { ICompany } from "./types";

const getCompanies = (): Promise<ICompany[]> => api.get('/companies');

export {getCompanies};