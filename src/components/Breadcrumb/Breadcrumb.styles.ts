import {css, styled} from "styled-components";

const BreadcrumbList = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 8px;
    padding: 0;
    color: ${({theme}) => theme.colors["gray-600"]};
    font-weight: 400;
    font-size: 14px;
`;
const BreadcrumbItem = styled.li<{active: boolean}>`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 12px;

    ${
        ({active}) => active && css`    
            color: ${({theme}) => theme.colors["gray-950"]};
            font-weight: 600;
            font-size: 20px;
        `
    }
`;

export {BreadcrumbList, BreadcrumbItem};