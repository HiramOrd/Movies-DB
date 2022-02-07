import { Dispatch } from '@reduxjs/toolkit';
import { setVideos } from '_core/movie/movieReducer';
import { MovieFactory } from '_core/movie/MovieFactory';
import { GetVideosUseCase } from '_core/movie/useCases';

export const fetchVideos = (movieID: string) => async (dispatch: Dispatch) => {
    try {
        const getVideos = MovieFactory.build(GetVideosUseCase);
        const videos = await getVideos.run(movieID);
        dispatch(setVideos(videos));
    } catch (error) {
        console.warn(error);
    }
};
