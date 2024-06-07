import { FC } from "react";
import * as Style from "./Breadcrumb.styles";
import { IBreadcrumb } from "./Breadcrumb.types";

const Breadcrumb: FC<IBreadcrumb> = ({breadcrumbs}) => (
    <Style.BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => (
            <>
                <Style.BreadcrumbItem active={breadcrumb.active} key={breadcrumb.route}>
                    <span>
                        {
                            (index > 0) && index < breadcrumbs.length && '/ '
                        }
                        {breadcrumb.label}
                    </span>
                </Style.BreadcrumbItem>
            </>
        ))}
    </Style.BreadcrumbList>
)

export {Breadcrumb};