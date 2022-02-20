import { Dispatch } from '@reduxjs/toolkit';
import { FactoryRepository } from '../Factory';
import { updateMoviesDay as update } from '../moviesReducer';

export const updateMoviesDay = (page: number) => async (dispatch: Dispatch) => {
    try {
        const repository = FactoryRepository.build();
        const moviesDay = await repository.getMovieDay(page);
        dispatch(update(moviesDay));
    } catch (error) {
        console.warn(error);
    }
};
