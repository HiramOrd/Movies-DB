import { Dispatch } from '@reduxjs/toolkit';
import { ScrollController } from 'hooks';
import { FactoryRepository } from '../Factory';
import { setTopRated, updateTopRated as update } from '../moviesReducer';

export const fetchTopRated = () => async (dispatch: Dispatch) => {
    try {
        const repository = FactoryRepository.build();
        const topRated = await repository.getTopRated();
        dispatch(setTopRated(topRated));
    } catch (error) {
        console.warn(error);
    }
};

export const updateTopRated = (page: number) => async (dispatch: Dispatch) => {
    try {
        const repository = FactoryRepository.build();
        const topRated = await repository.getTopRated(page);
        dispatch(update(topRated));
    } catch (error) {
        console.warn(error);
    }
};

export const topRatedController = new ScrollController(updateTopRated);
