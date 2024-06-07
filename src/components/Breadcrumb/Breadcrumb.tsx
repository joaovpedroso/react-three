import { FC, Fragment } from "react";
import * as Style from "./Breadcrumb.styles";
import { IBreadcrumb } from "./Breadcrumb.types";

const Breadcrumb: FC<IBreadcrumb> = ({breadcrumbs}) => (
    <Style.BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => (
            <Fragment key={`${breadcrumb.route}-${index}`}>
                <Style.BreadcrumbItem $active={breadcrumb.active}>
                    <span>
                        {
                            (index > 0) && index < breadcrumbs.length && '/ '
                        }
                        {breadcrumb.label}
                    </span>
                </Style.BreadcrumbItem>
            </Fragment>
        ))}
    </Style.BreadcrumbList>
)

export {Breadcrumb};