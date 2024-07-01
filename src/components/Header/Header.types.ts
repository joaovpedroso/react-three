import { ICompany } from "src/services/companies/types";

export interface IHeader {
    onSelectCompany: (company: ICompany) => void;
}