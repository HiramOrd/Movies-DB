import { Dispatch } from '@reduxjs/toolkit';
import { setLoading, setMovie } from '_core/movie/movieReducer';
import { Factory } from '_core/movie/Factory';
import { GetMovieUseCase } from '_core/movie/useCases';

export const fetchMovie = (movieID: string) => async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    try {
        const GetMovie = Factory.build(GetMovieUseCase);
        const movie = await GetMovie.run(movieID);
        dispatch(setMovie(movie));
    } catch (error) {
        console.warn(error);
    }
    dispatch(setLoading(false));
};
