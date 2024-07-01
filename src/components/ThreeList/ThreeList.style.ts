import {styled} from "styled-components";

const ThreeListContainer = styled.ul<{$isChildren?: boolean}>`
    list-style: none;
    padding: ${({$isChildren = false}) => $isChildren ? '4px 4px 4px 20px' : '0'};
    margin: 0;
`;

export {ThreeListContainer};