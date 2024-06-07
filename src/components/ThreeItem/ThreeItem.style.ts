import {css, styled} from "styled-components";

const ThreeItemContainer = styled.li`
    cursor: pointer;
    
    display: flex;
    align-items: center;
    justify-content: start;
`;

const ThreeItemIconWrapper = styled.span`
    margin-right: 4px;
`;

const ThreeItemIndicator = styled.div<{$rotate: boolean}>`
    margin: 0 8px 0 12px;

    ${({ $rotate }) => $rotate && css`
        transform: rotate(180deg);
    `};
`;

const ThreeItemLabel = styled.span`
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: ${({theme}) => theme.colors["platform-header"]};
`;

export {ThreeItemContainer, ThreeItemIndicator, ThreeItemIconWrapper, ThreeItemLabel};