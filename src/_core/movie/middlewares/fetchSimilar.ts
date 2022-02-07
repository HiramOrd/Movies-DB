import { Dispatch } from '@reduxjs/toolkit';
import { MovieFactory } from '../MovieFactory';
import { setSimilar } from '../movieReducer';
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
