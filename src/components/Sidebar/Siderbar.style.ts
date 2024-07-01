import {styled} from "styled-components";

const Aside = styled.section`
    width: 479px;
    min-height: 675px;
    max-height: 100vh;
    overflow: hidden;
    overflow-y: auto;
    padding: 8px 4px;
    border: 1px solid ${({theme}) => theme.colors["gray-200"]};
    border-top: 0;

        
    &::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 4px;
        background-color: ${({theme}) => theme.colors["gray-150"]};
    }

    &::-webkit-scrollbar
    {
        width: 4px;
        background-color: ${({theme}) => theme.colors["gray-150"]};
    }

    &::-webkit-scrollbar-thumb
    {
        border-radius: 4px;
        background-color: ${({theme}) => theme.colors["blue-500"]};
    }

`;

export {Aside};