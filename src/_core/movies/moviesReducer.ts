import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Genre } from '_core/_shared/types';
import { GenresResponse, MoviesResponse } from './types';

interface MoviesState {
    moviesDay: MoviesResponse | null;
    nowPlaying: MoviesResponse | null;
    topRated: MoviesResponse | null;
    upcoming: MoviesResponse | null;
    genres: Genre[] | null;
    loading: boolean;
}

const initialState: MoviesState = {
    moviesDay: null,
    nowPlaying: null,
    topRated: null,
    upcoming: null,
    genres: null,
    loading: false,
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setLoading: (state: MoviesState, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },

        setMoviesDay: (
            state: MoviesState,
            action: PayloadAction<MoviesResponse>
        ) => {
            state.moviesDay = action.payload;
        },
        updateMoviesDay: (
            state: MoviesState,
            action: PayloadAction<MoviesResponse>
        ) => {
            state.moviesDay = {
                ...action.payload,
                results: [
                    ...state.moviesDay?.results!,
                    ...action.payload.results!,
                ],
            };
        },

        setNowPlaying: (
            state: MoviesState,
            action: PayloadAction<MoviesResponse>
        ) => {
            state.nowPlaying = action.payload;
        },
        updateNowPlaying: (
            state: MoviesState,
            action: PayloadAction<MoviesResponse>
        ) => {
            state.nowPlaying = {
                ...action.payload,
                results: [
                    ...state.nowPlaying?.results!,
                    ...action.payload.results!,
                ],
            };
        },

        setTopRated: (
            state: MoviesState,
            action: PayloadAction<MoviesResponse>
        ) => {
            state.topRated = action.payload;
        },
        updateTopRated: (
            state: MoviesState,
            action: PayloadAction<MoviesResponse>
        ) => {
            state.topRated = {
                ...action.payload,
                results: [
                    ...state.topRated?.results!,
                    ...action.payload.results!,
                ],
            };
        },

        setUpcoming: (
            state: MoviesState,
            action: PayloadAction<MoviesResponse>
        ) => {
            state.upcoming = action.payload;
        },
        updateUpcoming: (
            state: MoviesState,
            action: PayloadAction<MoviesResponse>
        ) => {
            state.upcoming = {
                ...action.payload,
                results: [
                    ...state.upcoming?.results!,
                    ...action.payload.results!,
                ],
            };
        },

        setGenres: (
            state: MoviesState,
            action: PayloadAction<GenresResponse>
        ) => {
            if (action.payload.genres) {
                state.genres = action.payload.genres;
            }
        },
    },
});

export const {
    setLoading,
    setMoviesDay,
    updateMoviesDay,
    setNowPlaying,
    updateNowPlaying,
    setTopRated,
    updateTopRated,
    setUpcoming,
    updateUpcoming,
    setGenres,
} = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
