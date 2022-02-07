import { Dispatch } from '@reduxjs/toolkit';
import { MovieFactory } from '../MovieFactory';
import { setCast } from '../movieReducer';
import { GetCastUseCase } from '../useCases';

export const fetchCast = (movieID: string) => async (dispatch: Dispatch) => {
    try {
        const getCast = MovieFactory.build(GetCastUseCase);
        const cast = await getCast.run(movieID);
        dispatch(setCast(cast));
    } catch (error) {
        console.warn(error);
    }
};
