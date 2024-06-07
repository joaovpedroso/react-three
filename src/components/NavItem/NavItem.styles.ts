import {styled} from "styled-components";

const NavigationItem = styled.li<{$active: boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 4px 8px;
    font-size: 12px;
    font-weight: 600;
    background-color: ${({ theme, $active = false }) => $active ? theme.colors["blue-500"] : theme.colors["blue-900"]};
    color: #FFF;
    cursor: pointer;
`;

export {NavigationItem};