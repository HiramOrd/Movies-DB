import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie, Images, Video, Artist, Similar } from '_core/movie/types';

interface MovieState {
    movie: Movie | null;
    images: Images | null;
    videos: Video[] | null;
    cast: Artist[] | null;
    similar: Similar | null;
    loading: boolean;
}

const initialState: MovieState = {
    movie: null,
    images: null,
    videos: null,
    cast: null,
    similar: null,
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
        setCast: (state: MovieState, action: PayloadAction<Artist[]>) => {
            state.cast = action.payload;
        },
        setSimilar: (state: MovieState, action: PayloadAction<Similar>) => {
            state.similar = action.payload;
        },

        updateSimilar: (state: MovieState, action: PayloadAction<Similar>) => {
            state.similar = {
                ...state.similar,
                results: [
                    ...state?.similar?.results!,
                    ...action.payload.results!,
                ],
                page: action.payload.page,
            };
        },
    },
});

export const {
    setMovie,
    setImages,
    setVideos,
    setCast,
    setSimilar,
    updateSimilar,
} = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
