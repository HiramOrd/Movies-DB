import { Dispatch } from '@reduxjs/toolkit';
import { FactoryRepository } from '../Factory';
import { setImages } from '../movieReducer';

export const fetchImages = (movieID: string) => async (dispatch: Dispatch) => {
    try {
        const repository = FactoryRepository.build();
        const images = await repository.getImages(movieID);
        dispatch(setImages(images));
    } catch (error) {
        console.warn(error);
    }
};
