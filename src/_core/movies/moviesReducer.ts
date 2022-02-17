import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieDayResponse } from './types';

interface MoviesState {
    moviesDay: MovieDayResponse | null;
    loading: boolean;
}

const initialState: MoviesState = {
    moviesDay: null,
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
    },
});

export const { setLoading, setMoviesDay } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
