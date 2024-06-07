import { FC } from "react";
import * as Style from "./PageHeader.style";
import { Breadcrumb } from "src/components/Breadcrumb";
import { Filters } from "src/components/Filters";

const BREADCRUMBS = [
    {
      label: "Ativos",
      route: "",
      active: true,
    },
    {
      label: "Apex Unit",
      route: "",
      active: false,
    }
];

const PageHeader: FC = () => (
    <Style.PageHeaderContainer>
        <Breadcrumb breadcrumbs={BREADCRUMBS} />
        <Filters />
    </Style.PageHeaderContainer>
);

export {PageHeader};