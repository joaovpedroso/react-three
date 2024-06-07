import {css, styled} from "styled-components";
import { IIcon } from "./Icon.types";

const CustomIcon = styled.img<IIcon>`
    ${({color}) => color && css`
        color: ${color};
        
        svg {
            color: ${color};
        }
    
    `};
`;

export {CustomIcon};
