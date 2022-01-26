import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '_core/movie/types';

interface MovieState {
    movie: Movie | null;
    loading: boolean;
}

const initialState: MovieState = {
    movie: null,
    loading: false,
};

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovie: (state: MovieState, action: PayloadAction<Movie>) => {
            state.movie = action.payload;
        },
    },
});

export const { setMovie } = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
