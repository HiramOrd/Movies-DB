import { Dispatch } from '@reduxjs/toolkit';
import { FactoryRepository } from '../Factory';
import { setCast } from '../movieReducer';

export const fetchCast = (movieID: string) => async (dispatch: Dispatch) => {
    try {
        const repository = FactoryRepository.build();
        const cast = await repository.getCast(movieID);
        dispatch(setCast(cast.cast || []));
    } catch (error) {
        console.warn(error);
    }
};
