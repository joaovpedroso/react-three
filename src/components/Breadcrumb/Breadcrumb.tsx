import { FC} from "react";
import * as Style from "./Breadcrumb.styles";
import { IBreadcrumb } from "./Breadcrumb.types";

const Breadcrumb: FC<IBreadcrumb> = ({ selectedCompany }: IBreadcrumb) => (
    <Style.BreadcrumbList>
         <Style.BreadcrumbItem $active>
            <span>
                Ativos 
                {selectedCompany?.name && '/'}
            </span>
        </Style.BreadcrumbItem>

        <Style.BreadcrumbItem $active={false}>
            <span>
                {selectedCompany?.name}
            </span>
        </Style.BreadcrumbItem>
    </Style.BreadcrumbList>
)

export {Breadcrumb};