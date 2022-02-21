import { Dispatch } from '@reduxjs/toolkit';
import { ScrollController } from 'hooks';
import { FactoryRepository } from '../Factory';
import { setNowPlaying, updateNowPlaying as update } from '../moviesReducer';

export const fetchNowPlaying = () => async (dispatch: Dispatch) => {
    try {
        const repository = FactoryRepository.build();
        const nowPlaying = await repository.getNowPlaying();
        dispatch(setNowPlaying(nowPlaying));
    } catch (error) {
        console.warn(error);
    }
};

export const updateNowPlaying =
    (page: number) => async (dispatch: Dispatch) => {
        try {
            const repository = FactoryRepository.build();
            const nowPlaying = await repository.getNowPlaying(page);
            dispatch(update(nowPlaying));
        } catch (error) {
            console.warn(error);
        }
    };

export const nowPlayingController = new ScrollController(updateNowPlaying);
