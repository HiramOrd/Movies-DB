import { Dispatch } from '@reduxjs/toolkit';
import { FactoryRepository } from '../Factory';
import { setGenres } from '../moviesReducer';

export const fetchGenres = () => async (dispatch: Dispatch) => {
    try {
        const repository = FactoryRepository.build();
        const genres = await repository.getGenres();
        dispatch(setGenres(genres));
    } catch (error) {
        console.warn(error);
    }
};
