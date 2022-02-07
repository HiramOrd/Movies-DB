import { Dispatch } from '@reduxjs/toolkit';
import { FactoryRepository } from '../Factory';
import { updateSimilar as updateSimilarAct } from '../movieReducer';

export const updateSimilar =
    (movieID: string, page: number = 1) =>
    async (dispatch: Dispatch) => {
        try {
            const repository = FactoryRepository.build();
            const similar = await repository.getSimilar(movieID, page);
            dispatch(updateSimilarAct(similar));
        } catch (error) {
            console.warn(error);
        }
    };
