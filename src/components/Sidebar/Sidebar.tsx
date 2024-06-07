import { FC } from 'react';
import * as Style from './Siderbar.style';
import { ISidebar } from './Sidebar.types';

const Sidebar: FC<ISidebar> = ({children}: ISidebar) => (
    <Style.Aside>
        {children}
    </Style.Aside>
);

export {Sidebar};