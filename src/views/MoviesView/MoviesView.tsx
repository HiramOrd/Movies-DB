import {
    Carousel,
    Hero,
    OverviewBackground,
    Poster,
    Section,
} from 'components';
import {
    fetchGenres,
    fetchMoviesDay,
    fetchNowPlaying,
    fetchTopRated,
    fetchUpcoming,
    moviesDayController,
    nowPlayingController,
    topRatedController,
    upcomingController,
} from '_core/movies/middlewares';

import { useInfiniteScroll } from 'hooks';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'store';

import './moviesView.scss';

export const MoviesView = () => {
    const dispatch = useDispatch();

    const { loading, moviesDay, nowPlaying, topRated, upcoming, genres } =
        useSelector((state: RootState) => state.movies);

    const [setLimitMD] = useInfiniteScroll(moviesDay, moviesDayController);
    const [setLimitNP] = useInfiniteScroll(nowPlaying, nowPlayingController);
    const [setLimitTR] = useInfiniteScroll(topRated, topRatedController);
    const [setLimitU] = useInfiniteScroll(upcoming, upcomingController);

    useEffect(() => {
        dispatch(fetchMoviesDay());
        dispatch(fetchTopRated());
        dispatch(fetchNowPlaying());
        dispatch(fetchUpcoming());
        dispatch(fetchGenres());
    }, []);

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
                            moviesDay.results!.map((movie, i) => (
                                <Link
                                    to={`/movies/movie/${movie.id}`}
                                    key={`${movie.id}${i}`}
                                >
                                    <Poster
                                        posterID={movie.id}
                                        posterPath={movie.poster_path}
                                    />
                                </Link>
                            ))}
                    </Carousel>
                </Section>

                <div className="separator" />

                <Section title="Top Rated">
                    <Carousel id="topRated" scrollLimit={setLimitTR}>
                        {topRated &&
                            topRated.results!.map((movie, i) => (
                                <Link
                                    to={`/movies/movie/${movie.id}`}
                                    key={`${movie.id}${i}`}
                                >
                                    <Poster
                                        posterID={movie.id}
                                        posterPath={movie.poster_path}
                                    />
                                </Link>
                            ))}
                    </Carousel>
                </Section>

                <div className="separator" />

                <Section title="Now Playing">
                    <Carousel id="nowPlaying" scrollLimit={setLimitNP}>
                        {nowPlaying &&
                            nowPlaying.results!.map((movie, i) => (
                                <Link
                                    to={`/movies/movie/${movie.id}`}
                                    key={`${movie.id}${i}`}
                                >
                                    <Poster
                                        posterID={movie.id}
                                        posterPath={movie.poster_path}
                                    />
                                </Link>
                            ))}
                    </Carousel>
                </Section>

                <div className="separator" />

                <Section title="Upcoming">
                    <Carousel id="upcoming" scrollLimit={setLimitU}>
                        {upcoming &&
                            upcoming.results!.map((movie, i) => (
                                <Link
                                    to={`/movies/movie/${movie.id}`}
                                    key={`${movie.id}${i}`}
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
