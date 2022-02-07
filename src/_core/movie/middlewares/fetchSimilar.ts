import { Dispatch } from '@reduxjs/toolkit';
import { Factory } from '../Factory';
import { setSimilar } from '../movieReducer';
import { GetSimilarUseCase } from '../useCases';

export const fetchSimilar = (movieID: string) => async (dispatch: Dispatch) => {
    try {
        const getSimilar = Factory.build(GetSimilarUseCase);
        const similar = await getSimilar.run(movieID);
        dispatch(setSimilar(similar));
    } catch (error) {
        console.warn(error);
    }
};
