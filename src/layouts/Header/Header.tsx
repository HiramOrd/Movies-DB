import { NavbarDesktop, NavbarMobile } from './components';
import { useHeader } from 'hooks';
import './header.scss';
import { headerRoutes } from 'constants/routes';

export const Header = () => {
    const onTop = useHeader();

    return (
        <div className={`header-bg ${!onTop && 'scroll'}`}>
            <NavbarDesktop routes={headerRoutes} />
            <NavbarMobile routes={headerRoutes} />
        </div>
    );
};
