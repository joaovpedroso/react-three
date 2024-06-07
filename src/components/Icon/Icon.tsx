import { FC } from "react";
import { IIcon } from "./Icon.types";
import * as Style from './Icon.style';

const Icon: FC<IIcon> = ({color = '#FFF', ...props}: IIcon) => (
    <Style.CustomIcon color={color} {...props} />
);

export {Icon};