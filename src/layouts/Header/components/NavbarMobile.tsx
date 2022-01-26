import { HeaderRoutes } from 'types';
import { RightSection } from './RightSection';

interface Props {
    routes: HeaderRoutes[];
}
export const NavbarMobile = ({ routes }: Props) => {
    return (
        <div className="header__mobile">
            <div className="header__mobile__menu">
                <div
                    className="header__action-menu"
                    onClick={() => toggleActive('.header__mobile__menu')}
                >
                    <i className="fas fa-times"></i>
                </div>
                <div className="header__mobile__options">
                    {routes.map((route) => (
                        <div
                            className="header__mobile__option"
                            key={route.name}
                        >
                            {route.name}
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <div
                    className="header__action-menu"
                    onClick={() => toggleActive('.header__mobile__menu')}
                >
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
