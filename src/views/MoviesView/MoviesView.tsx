import { Hero, OverviewBackground } from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { fetchMoviesDay } from '_core/movies/middlewares';
import './moviesView.scss';

export const MoviesView = () => {
    const dispatch = useDispatch();
    const { loading, moviesDay } = useSelector(
        (state: RootState) => state.movies
    );

    useEffect(() => {
        dispatch(fetchMoviesDay());
    }, []);

    return (
        <>
            <OverviewBackground
                backdrop_path={moviesDay?.results![0].backdrop_path}
                original_title={moviesDay?.results![0].original_title}
            />
            <Hero />
        </>
    );
};
