import { Dispatch } from '@reduxjs/toolkit';
import { setLoading, setMovie } from '_core/movie/movieReducer';
import { MovieFactory } from '_core/movie/MovieFactory';
import { GetMovieUseCase } from '_core/movie/useCases';

export const fetchMovie = (movieID: string) => async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    try {
        const getMovie = MovieFactory.build(GetMovieUseCase);
        const movie = await getMovie.run(movieID);
        dispatch(setMovie(movie));
    } catch (error) {
        console.warn(error);
    }
    dispatch(setLoading(false));
};
