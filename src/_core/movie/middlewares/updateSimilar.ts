import { Dispatch } from '@reduxjs/toolkit';
import { GetSimilarUseCase } from '../useCases';
import { Factory } from '../Factory';
import { updateSimilar as updateSimilarAct } from '../movieReducer';

export const updateSimilar =
    (movieID: string, page: number = 1) =>
    async (dispatch: Dispatch) => {
        try {
            const getSimilar = Factory.build(GetSimilarUseCase);
            const similar = await getSimilar.run(movieID, page);
            dispatch(updateSimilarAct(similar));
        } catch (error) {
            console.warn(error);
        }
    };
