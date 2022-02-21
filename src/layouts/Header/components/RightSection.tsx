import { searchExpludes } from 'constants/routes';
import { useLocation } from 'react-router-dom';

export const RightSection = () => {
    const { pathname } = useLocation();
    return !searchExpludes.includes(pathname) ? (
        <div className="header__right">
            <input type="search" placeholder="Search" className="seeker" />
            {/* <img src="/assets/user.jpg" alt="profile" /> */}
        </div>
    ) : (
        <div></div>
    );
};
