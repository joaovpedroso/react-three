import {styled} from "styled-components";
import Search from 'src/assets/icons/outlined/Search.svg';


const SearchInput = styled.input`
    height: 45px;
    min-width: 479px;
    padding: 12px;
    border: 1px solid ${({theme}) => theme.colors["border-card"]};
    border-radius: 2px;

    font-size: 14px;
    font-weight: 400;
    color: ${({theme}) => theme.colors["placeholder-disable"]};

    background-image: url(${Search});
    background-repeat: no-repeat;
    background-position: calc(100% - 30px);
`;

SearchInput.defaultProps = {
    placeholder: 'Buscar Ativo ou Local',
    type: 'search'
}

export {SearchInput};