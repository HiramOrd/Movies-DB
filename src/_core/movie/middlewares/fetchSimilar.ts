import { Dispatch } from '@reduxjs/toolkit';
import { MovieFactory } from '../movieFactory';
import { setSimilar, updateSimilar as updateSimilarAct } from '../movieReducer';
import { GetSimilarUseCase } from '../useCases';

export const fetchSimilar = (movieID: string) => async (dispatch: Dispatch) => {
    try {
        const getSimilar = MovieFactory.build(GetSimilarUseCase);
        const similar = await getSimilar.run(movieID);
        dispatch(setSimilar(similar));
    } catch (error) {
        console.warn(error);
    }
};

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
