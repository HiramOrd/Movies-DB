import { Dispatch } from '@reduxjs/toolkit';
import { ScrollController } from 'hooks';
import { FactoryRepository } from '../Factory';
import { setMoviesDay, updateMoviesDay as update } from '../moviesReducer';

export const fetchMoviesDay = () => async (dispatch: Dispatch) => {
    try {
        const repository = FactoryRepository.build();
        const moviesDay = await repository.getMovieDay();
        dispatch(setMoviesDay(moviesDay));
    } catch (error) {
        console.warn(error);
    }
};

export const updateMoviesDay = (page: number) => async (dispatch: Dispatch) => {
    try {
        const repository = FactoryRepository.build();
        const moviesDay = await repository.getMovieDay(page);
        dispatch(update(moviesDay));
    } catch (error) {
        console.warn(error);
    }
};

export const moviesDayController = new ScrollController(updateMoviesDay);
