import { Dispatch } from '@reduxjs/toolkit';
import { setVideos } from '_core/movie/movieReducer';
import { FactoryRepository } from '_core/movie/Factory';

export const fetchVideos = (movieID: string) => async (dispatch: Dispatch) => {
    try {
        const repository = FactoryRepository.build();
        const videos = await repository.getVideos(movieID);
        dispatch(setVideos(videos.results || []));
    } catch (error) {
        console.warn(error);
    }
};
