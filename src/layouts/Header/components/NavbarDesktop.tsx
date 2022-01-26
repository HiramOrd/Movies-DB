import { HeaderRoutes } from 'types';
import { RightSection } from './RightSection';

interface Props {
    routes: HeaderRoutes[];
}
export const NavbarDesktop = ({ routes }: Props) => {
    return (
        <div className="header__desktop">
            <div className="header__desktop__menu">
                <img
                    className="header__desktop__option"
                    src="/assets/logo.png"
                    alt="logo"
                    height={40}
                />
                <div>
                    {routes.map((route) => (
                        <div
                            className="header__desktop__option"
                            key={route.name}
                        >
                            {route.name}
                        </div>
                    ))}
                </div>
            </div>

            <RightSection />
        </div>
    );
};
