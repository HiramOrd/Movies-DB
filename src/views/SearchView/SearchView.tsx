import { OverviewBackground, Poster } from 'components';
import { ROUTES } from 'constants/routes';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { RootState } from 'store';
import { fetchSearch } from '_core/movies/middlewares';
import { setSearch } from '_core/movies/moviesReducer';
import './searchView.scss';

export const SearchView = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const { search } = useSelector((state: RootState) => state.movies);

    useEffect(() => {
        if (searchParams.get('name')) {
            dispatch(fetchSearch(searchParams.get('name')!));
        }
        return () => {
            dispatch(setSearch(null));
        };
    }, [searchParams]);

    return (
        <div className="container-first search">
            {search?.results && search.results.length > 0 && (
                <OverviewBackground
                    backdrop_path={search?.results[0].backdrop_path}
                    original_title={search?.results[0].original_title}
                />
            )}

            <h1 className="search__title">
                Search: {searchParams.get('name')}
            </h1>
            {search?.results && search.results.length > 0 ? (
                <div className="search__container">
                    {search?.results?.map((movie, i) => (
                        <Link
                            to={`${ROUTES.movie}${movie.id}`}
                            key={`${movie.id}${i}`}
                        >
                            <Poster
                                posterID={movie.id}
                                posterPath={movie.poster_path}
                            />
                        </Link>
                    ))}
                </div>
            ) : (
                <span className="search__not-found">
                    No related content found :c
                </span>
            )}
        </div>
    );
};
