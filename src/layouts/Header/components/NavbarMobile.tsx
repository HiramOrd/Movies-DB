import { NavLink } from 'react-router-dom';
import { HeaderRoutes } from 'types';
import { RightSection } from './RightSection';

interface Props {
    routes: HeaderRoutes[];
}

const toggleMenu = () => {
    toggleActive('.header__mobile__menu');
};
export const NavbarMobile = ({ routes }: Props) => {
    return (
        <div className="header__mobile">
            <div className="header__mobile__menu">
                <div className="header__action-menu" onClick={toggleMenu}>
                    <i className="fas fa-times"></i>
                </div>
                <div className="header__mobile__options">
                    <NavLink
                        to="/"
                        className="header__mobile__option"
                        onClick={toggleMenu}
                    >
                        Home
                    </NavLink>
                    {routes.map((route) => (
                        <NavLink
                            to={route.route}
                            className="header__mobile__option"
                            key={route.name}
                            onClick={toggleMenu}
                        >
                            {route.name}
                        </NavLink>
                    ))}
                </div>
            </div>

            <div>
                <div className="header__action-menu" onClick={toggleMenu}>
                    <img src="/assets/logo.png" alt="logo" height={40} />
                </div>
            </div>

            <RightSection />
        </div>
    );
};

const toggleActive = (name: string) => {
    document?.querySelector(name)?.classList.toggle('active');
};
