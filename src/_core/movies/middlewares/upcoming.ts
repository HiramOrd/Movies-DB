import { Dispatch } from '@reduxjs/toolkit';
import { FactoryRepository } from '../Factory';
import { setUpcoming, updateUpcoming as update } from '../moviesReducer';

export const fetchUpcoming = () => async (dispatch: Dispatch) => {
    try {
        const repository = FactoryRepository.build();
        const upcoming = await repository.getUpcoming();
        dispatch(setUpcoming(upcoming));
    } catch (error) {
        console.warn(error);
    }
};

export const updateUpcoming = (page: number) => async (dispatch: Dispatch) => {
    try {
        const repository = FactoryRepository.build();
        const upcoming = await repository.getUpcoming(page);
        dispatch(update(upcoming));
    } catch (error) {
        console.warn(error);
    }
};
