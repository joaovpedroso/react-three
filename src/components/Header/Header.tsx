import { FC } from 'react';
import LogoTractian from 'src/assets/logo_tractian.svg';
import * as Styled from './Header.styles';
import { Navbar } from 'src/components/Navbar';
import { NAV_ITEMS } from 'src/constants/navigation';

const Header: FC  = () => (
    <Styled.Header>
        <img src={LogoTractian} alt="Logo Tractian" />
        <Navbar items={NAV_ITEMS} />
    </Styled.Header>
);

export {Header};