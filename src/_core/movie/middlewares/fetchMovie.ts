import { Dispatch } from '@reduxjs/toolkit';
import { setMovie } from '_core/movie/movieReducer';
import { MovieFactory } from '_core/movie/movieFactory';
import { GetMovieUseCase } from '_core/movie/useCases';

export const fetchMovie = (movieID: string) => async (dispatch: Dispatch) => {
    try {
        const getMovie = MovieFactory.build(GetMovieUseCase);
        const movie = await getMovie.run(movieID);
        dispatch(setMovie(movie));
    } catch (error) {
        console.warn(error);
    }
};
