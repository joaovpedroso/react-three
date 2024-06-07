import { FC } from "react";
import { EnumButtonStatus, EnumButtonVariants, IButton } from "./Button.types";
import * as Style from "./Button.style";

const Button: FC<IButton> = ({
    children,
    variant = EnumButtonVariants.primary,
    status = EnumButtonStatus.default,
    onClick
}: IButton) => (
    <Style.StyledButton variant={variant} status={status} onClick={onClick}>
        {children}
    </Style.StyledButton>
);

export {Button};