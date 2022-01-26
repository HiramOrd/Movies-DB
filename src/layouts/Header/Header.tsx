import { NavbarDesktop, NavbarMobile } from './components';
import { useHeader } from 'hooks';
import { headerRoutes } from 'constants/routes/headerRoutes';
import './header.scss';

export const Header = () => {
    const onTop = useHeader();

    return (
        <div className={`header-bg ${!onTop && 'scroll'}`}>
            <NavbarDesktop routes={headerRoutes} />
            <NavbarMobile routes={headerRoutes} />
        </div>
    );
};
