import {styled} from "styled-components";

const Container = styled.main`
    margin: 8px;
    padding: 16px;
    border-radius: 4px;
    border: 1px solid ${({theme}) => theme.colors["border-card"]};
    background-color: #FFF;
`;

export {Container};
