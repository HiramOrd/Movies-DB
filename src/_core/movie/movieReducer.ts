import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie, Images } from '_core/movie/types';

interface MovieState {
    movie: Movie | null;
    images: Images | null;
    loading: boolean;
}

const initialState: MovieState = {
    movie: null,
    images: null,
    loading: false,
};

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovie: (state: MovieState, action: PayloadAction<Movie>) => {
            state.movie = action.payload;
        },
        setImages: (state: MovieState, action: PayloadAction<Images>) => {
            state.images = action.payload;
        },
    },
});

export const { setMovie, setImages } = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
