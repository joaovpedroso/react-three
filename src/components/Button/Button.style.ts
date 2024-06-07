import {css, styled} from "styled-components";
import { EnumButtonStatus, EnumButtonVariants, IButton } from "./Button.types";
import theme from "src/styles/theme";

const BUTTON_STYLES = {
    [EnumButtonVariants.primary]: {
        active: {
            'background-color': 'blue',
        }
    },
    [EnumButtonVariants.secondary]: {
        'background-color': '#FFF',
        'color': `${theme.colors["gray-600"]}`,
        'border': `1px solid ${theme.colors["gray-200"]}`,
        'padding': '6px 16px 6px 14px',
        'font-size': '14px',
        'border-radius': '3px',
        active: {
            'color': '#FFF',
            'background-color': `${theme.colors["blue-500"]}`,
            'border-color': `${theme.colors["blue-500"]}`,
        }
    },
}

const StyledButton = styled.button<IButton>`
    cursor: pointer;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    
    ${({
        variant = EnumButtonVariants.primary,
        status = EnumButtonStatus.default
    }) => css`
        ${BUTTON_STYLES[variant]};
        ${status === EnumButtonStatus["active-one"] && BUTTON_STYLES[variant]?.active ? BUTTON_STYLES[variant].active : '' };
        `
    };
`;

export {StyledButton};