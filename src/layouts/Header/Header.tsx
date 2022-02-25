import { ROUTES } from 'constants/routes';
import { useHeader } from 'hooks';
import { useEffect, useState } from 'react';
import {
    createSearchParams,
    Link,
    useNavigate,
    useSearchParams,
} from 'react-router-dom';
import './header.scss';

export const Header = () => {
    const [searchParams] = useSearchParams();
    const [search, setSearch] = useState('');
    let navigate = useNavigate();
    const onTop = useHeader();

    useEffect(() => {
        setSearch(searchParams.get('name') || '');
    }, [searchParams]);

    const searchSubmit = (e: any) => {
        e.preventDefault();
        const params = createSearchParams({
            name: search,
        });
        navigate(`${ROUTES.search}?${params}`);
    };

    return (
        <div className={`header-bg ${!onTop && 'scroll'}`}>
            <div className="header">
                <Link className="header__left" to={ROUTES.home}>
                    <img src="/assets/logo.png" alt="logo" height={40} />
                </Link>

                <div className="header__right">
                    <form onSubmit={searchSubmit}>
                        <input
                            type="search"
                            placeholder="Search"
                            className="seeker"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </form>
                    {/* <img src="/assets/user.jpg" alt="profile" className="header__user"/> */}
                </div>
            </div>
        </div>
    );
};
