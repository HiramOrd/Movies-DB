import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Genre } from '_core/_shared/types';
import { GenresResponse, MovieDayResponse } from './types';

interface MoviesState {
    moviesDay: MovieDayResponse | null;
    genres: Genre[] | null;
    loading: boolean;
}

const initialState: MoviesState = {
    moviesDay: null,
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
            action: PayloadAction<MovieDayResponse>
        ) => {
            state.moviesDay = action.payload;
        },
        updateMoviesDay: (
            state: MoviesState,
            action: PayloadAction<MovieDayResponse>
        ) => {
            state.moviesDay = {
                ...action.payload,
                results: [
                    ...state.moviesDay?.results!,
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

export const { setLoading, setMoviesDay, updateMoviesDay, setGenres } =
    moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
