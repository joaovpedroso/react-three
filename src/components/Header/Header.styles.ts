import { styled } from "styled-components";

const Header = styled.header`
    width: 100%;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${({ theme }) => theme.colors["platform-header"]};
    padding: 12px 16px;
`;

export {Header};