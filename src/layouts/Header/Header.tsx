import { ROUTES } from 'constants/routes';
import { useHeader } from 'hooks';
import { Link } from 'react-router-dom';
import './header.scss';

export const Header = () => {
    const onTop = useHeader();

    return (
        <div className={`header-bg ${!onTop && 'scroll'}`}>
            <div className="header">
                <Link className="header__left" to={ROUTES.home}>
                    <img src="/assets/logo.png" alt="logo" height={40} />
                </Link>

                <div className="header__right">
                    <input
                        type="search"
                        placeholder="Search"
                        className="seeker"
                    />
                    {/* <img src="/assets/user.jpg" alt="profile" className="header__user"/> */}
                </div>
            </div>
        </div>
    );
};
