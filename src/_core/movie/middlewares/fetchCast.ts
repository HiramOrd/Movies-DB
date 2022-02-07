import { Dispatch } from '@reduxjs/toolkit';
import { Factory } from '../Factory';
import { setCast } from '../movieReducer';
import { GetCastUseCase } from '../useCases';

export const fetchCast = (movieID: string) => async (dispatch: Dispatch) => {
    try {
        const getCast = Factory.build(GetCastUseCase);
        const cast = await getCast.run(movieID);
        dispatch(setCast(cast));
    } catch (error) {
        console.warn(error);
    }
};
