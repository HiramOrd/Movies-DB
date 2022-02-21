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
import {
    fetchNowPlaying,
    updateNowPlaying,
} from '_core/movies/middlewares/nowPlaying';
import {
    fetchTopRated,
    updateTopRated,
} from '_core/movies/middlewares/topRated';
import {
    fetchUpcoming,
    updateUpcoming,
} from '_core/movies/middlewares/upcoming';
import './moviesView.scss';

export const MoviesView = () => {
    const dispatch = useDispatch();
    const { loading, moviesDay, nowPlaying, topRated, upcoming, genres } =
        useSelector((state: RootState) => state.movies);

    const [pageMD, setPageMD, setLimitMD] = useInfiniteScroll(moviesDay);
    const [pageNP, setPageNP, setLimitNP] = useInfiniteScroll(nowPlaying);
    const [pageTR, setPageTR, setLimitTR] = useInfiniteScroll(topRated);
    const [pageU, setPageU, setLimitU] = useInfiniteScroll(upcoming);

    useEffect(() => {
        setPageMD(1);
        setPageNP(1);
        setPageTR(1);
        setPageU(1);
        dispatch(fetchMoviesDay());
        dispatch(fetchTopRated());
        dispatch(fetchNowPlaying());
        dispatch(fetchUpcoming());
        dispatch(fetchGenres());
    }, []);

    useEffect(() => {
        if (pageMD > 1) dispatch(updateMoviesDay(pageMD));
    }, [pageMD]);

    useEffect(() => {
        if (pageNP > 1) dispatch(updateNowPlaying(pageNP));
    }, [pageNP]);

    useEffect(() => {
        if (pageTR > 1) dispatch(updateTopRated(pageTR));
    }, [pageTR]);

    useEffect(() => {
        if (pageU > 1) dispatch(updateUpcoming(pageU));
    }, [pageU]);

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
                    <Carousel id="moviesDay" scrollLimit={setLimitMD}>
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

                <Section title="Top Rated">
                    <Carousel id="topRated" scrollLimit={setLimitTR}>
                        {topRated &&
                            topRated.results!.map((movie) => (
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

                <Section title="Now Playing">
                    <Carousel id="nowPlaying" scrollLimit={setLimitNP}>
                        {nowPlaying &&
                            nowPlaying.results!.map((movie) => (
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

                <Section title="Upcoming">
                    <Carousel id="upcoming" scrollLimit={setLimitU}>
                        {upcoming &&
                            upcoming.results!.map((movie) => (
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
