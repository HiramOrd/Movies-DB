import { Dispatch } from '@reduxjs/toolkit';
import { FactoryRepository } from '../Factory';
import { setSimilar } from '../movieReducer';

export const fetchSimilar = (movieID: string) => async (dispatch: Dispatch) => {
    try {
        const repository = FactoryRepository.build();
        const similar = await repository.getSimilar(movieID);
        dispatch(setSimilar(similar));
    } catch (error) {
        console.warn(error);
    }
};
