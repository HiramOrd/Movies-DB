import { NavLink } from 'react-router-dom';
import { HeaderRoutes } from 'types';
import { RightSection } from './RightSection';

interface Props {
    routes: HeaderRoutes[];
}
export const NavbarDesktop = ({ routes }: Props) => {
    return (
        <div className="header__desktop">
            <div className="header__desktop__menu">
                <NavLink to="/" className="header__desktop__option">
                    <img src="/assets/logo.png" alt="logo" height={40} />
                </NavLink>
                <div>
                    {routes.map((route) => (
                        <NavLink
                            to={route.route}
                            className="header__desktop__option"
                            key={route.name}
                        >
                            {route.name}
                        </NavLink>
                    ))}
                </div>
            </div>

            <RightSection />
        </div>
    );
};
