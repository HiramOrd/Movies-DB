import { Dispatch } from '@reduxjs/toolkit';
import { FactoryRepository } from '../Factory';
import { setMoviesDay } from '../moviesReducer';

export const fetchMoviesDay = () => async (dispatch: Dispatch) => {
    try {
        const repository = FactoryRepository.build();
        const moviesDay = await repository.getMovieDay();
        dispatch(setMoviesDay(moviesDay));
    } catch (error) {
        console.warn(error);
    }
};
