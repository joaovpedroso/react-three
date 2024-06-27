import { FC } from "react";
import * as Style from "./PageHeader.style";
import { Breadcrumb } from "src/components/Breadcrumb";
import { Filters } from "src/components/Filters";
import { IPageHeader } from "./PageHeader.types";

const PageHeader: FC<IPageHeader> = ({ selectedCompany }: IPageHeader) => (
    <Style.PageHeaderContainer>
      <Breadcrumb selectedCompany={selectedCompany} />
      <Filters />
    </Style.PageHeaderContainer>
);

export {PageHeader};