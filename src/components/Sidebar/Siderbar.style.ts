import {styled} from "styled-components";

const Aside = styled.section`
    width: 479px;
    min-height: 675px;
    padding: 8px 4px;
    border: 1px solid ${({theme}) => theme.colors["gray-200"]};
    border-top: 0;
`;

export {Aside};