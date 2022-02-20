import {
    Carousel,
    Hero,
    OverviewBackground,
    Poster,
    Section,
} from 'components';
import { useInfiniteScroll } from 'hooks';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'store';
import {
    fetchGenres,
    fetchMoviesDay,
    updateMoviesDay,
} from '_core/movies/middlewares';
import './moviesView.scss';

export const MoviesView = () => {
    const dispatch = useDispatch();
    const { loading, moviesDay, genres } = useSelector(
        (state: RootState) => state.movies
    );

    const { page, setPage, setLimit } = useInfiniteScroll(moviesDay);

    useEffect(() => {
        setPage(1);
        dispatch(fetchMoviesDay());
        dispatch(fetchGenres());
    }, []);

    useEffect(() => {
        if (page > 1) dispatch(updateMoviesDay(page));
    }, [page]);

    return (
        <>
            <OverviewBackground
                backdrop_path={moviesDay?.results![0].backdrop_path}
                original_title={moviesDay?.results![0].original_title}
            />
            <div className="container-first">
                <Hero />

                <div className="movies__genres">
                    <Carousel id="genres">
                        {genres &&
                            genres.map((category) => (
                                <button
                                    className="btn-transparent"
                                    key={category.id}
                                >
                                    {category.name}
                                </button>
                            ))}
                    </Carousel>
                </div>

                <Section title="Trending Today">
                    <Carousel id="moviesDay" scrollLimit={setLimit}>
                        {moviesDay &&
                            moviesDay.results!.map((movie) => (
                                <Link
                                    to={`/movies/movie/${movie.id}`}
                                    key={movie.id}
                                >
                                    <Poster
                                        posterID={movie.id}
                                        posterPath={movie.poster_path}
                                    />
                                </Link>
                            ))}
                    </Carousel>
                </Section>
            </div>
        </>
    );
};
