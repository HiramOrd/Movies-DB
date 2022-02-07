import { Dispatch } from '@reduxjs/toolkit';
import { Factory } from '../Factory';
import { setImages } from '../movieReducer';
import { GetImagesUseCase } from '../useCases';

export const fetchImages = (movieID: string) => async (dispatch: Dispatch) => {
    try {
        const getImages = Factory.build(GetImagesUseCase);
        const images = await getImages.run(movieID);
        dispatch(setImages(images));
    } catch (error) {
        console.warn(error);
    }
};
