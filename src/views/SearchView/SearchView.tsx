import { InfiniteSection, OverviewBackground, Poster } from 'components';
import { ROUTES } from 'constants/routes';
import { ScrollIdController, useInfiniteScroll } from 'hooks';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { RootState } from 'store';
import { fetchSearch, updateSearch } from '_core/movies/middlewares';
import { setSearch } from '_core/movies/moviesReducer';
import './searchView.scss';

export const SearchView = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const { search: searchObject } = useSelector(
        (state: RootState) => state.movies
    );

    const searchName = useMemo(
        () => searchParams.get('name') ?? '',
        [searchParams]
    );

    useEffect(() => {
        if (searchName) {
            dispatch(fetchSearch(searchName));
        }
        return () => {
            dispatch(setSearch(null));
        };
    }, [searchName]);

    const searchController = useMemo(
        () => new ScrollIdController(updateSearch, searchName),
        [searchName]
    );

    const [scrollLimit] = useInfiniteScroll(searchObject, searchController);

    return (
        <div className="container-first search">
            {searchObject?.results && searchObject.results.length > 0 && (
                <OverviewBackground
                    backdrop_path={searchObject?.results[0].backdrop_path}
                    original_title={searchObject?.results[0].original_title}
                />
            )}

            <h1 className="search__title">Search: {searchName}</h1>
            {searchObject?.results && searchObject.results.length > 0 ? (
                <InfiniteSection id={searchName} scrollLimit={scrollLimit}>
                    {searchObject?.results?.map((movie, i) => (
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
                </InfiniteSection>
            ) : (
                <span className="search__not-found">
                    No related content found :c
                </span>
            )}
        </div>
    );
};
