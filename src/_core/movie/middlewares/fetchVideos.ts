import { Dispatch } from '@reduxjs/toolkit';
import { setVideos } from '_core/movie/movieReducer';
import { Factory } from '_core/movie/Factory';
import { GetVideosUseCase } from '_core/movie/useCases';

export const fetchVideos = (movieID: string) => async (dispatch: Dispatch) => {
    try {
        const getVideos = Factory.build(GetVideosUseCase);
        const videos = await getVideos.run(movieID);
        dispatch(setVideos(videos));
    } catch (error) {
        console.warn(error);
    }
};
