import { FC, useMemo, useState } from 'react';
import LogoTractian from 'src/assets/logo_tractian.svg';
import * as Styled from './Header.styles';
import { Navbar } from 'src/components/Navbar';
import { useCompanies } from 'src/hooks';
import { ICompany } from 'src/services/companies/types';
import { INavItem } from '../NavItem/NavItem.types';
import { IHeader } from './Header.types';

const Header: FC<IHeader>  = ({ onSelectCompany }: IHeader) => {
    const { companies } = useCompanies();
    const [selectedCompany, setSelectedCompany] = useState<ICompany | null>();

    const listCompanies = useMemo(() => {

        if( !companies || companies.length < 1 ) return [];

        return  companies?.map(company => (
            {
                ...company,
                active: selectedCompany && (selectedCompany.id === company.id)
            }
        ));

    }, [companies, selectedCompany]) as INavItem[];

    const handleSelectItem = (item: INavItem) => {
        setSelectedCompany(item)
        onSelectCompany(item);
    }

    return (
        <Styled.Header>
            <img src={LogoTractian} alt="Logo Tractian" />
            <Navbar items={listCompanies} onSelectItem={handleSelectItem} />
        </Styled.Header>
    );
}
export {Header};