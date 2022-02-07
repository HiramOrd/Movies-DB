import { Dispatch } from '@reduxjs/toolkit';
import { GetSimilarUseCase } from '../useCases';
import { MovieFactory } from '..';
import { updateSimilar as updateSimilarAct } from '../movieReducer';

export const updateSimilar =
    (movieID: string, page: number = 1) =>
    async (dispatch: Dispatch) => {
        try {
            const getSimilar = MovieFactory.build(GetSimilarUseCase);
            const similar = await getSimilar.run(movieID, page);
            dispatch(updateSimilarAct(similar));
        } catch (error) {
            console.warn(error);
        }
    };
