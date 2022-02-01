import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie, Images, Video } from '_core/movie/types';

interface MovieState {
    movie: Movie | null;
    images: Images | null;
    videos: Video[] | null;
    loading: boolean;
}

const initialState: MovieState = {
    movie: null,
    images: null,
    videos: null,
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
        setVideos: (state: MovieState, action: PayloadAction<Video[]>) => {
            state.videos = action.payload;
        },
    },
});

export const { setMovie, setImages, setVideos } = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
