import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie, ImagesResponse, SimilarsResponse } from '_core/movie/types';
import { Artist, Video } from '_core/_shared/types';

interface MovieState {
    movie: Movie | null;
    images: ImagesResponse | null;
    videos: Video[] | null;
    cast: Artist[] | null;
    similar: SimilarsResponse | null;
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
        setLoading: (state: MovieState, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setMovie: (state: MovieState, action: PayloadAction<Movie>) => {
            state.movie = action.payload;
        },
        setImages: (
            state: MovieState,
            action: PayloadAction<ImagesResponse>
        ) => {
            state.images = action.payload;
        },
        setVideos: (state: MovieState, action: PayloadAction<Video[]>) => {
            state.videos = action.payload;
        },
        setCast: (state: MovieState, action: PayloadAction<Artist[]>) => {
            state.cast = action.payload;
        },
        setSimilar: (
            state: MovieState,
            action: PayloadAction<SimilarsResponse>
        ) => {
            state.similar = action.payload;
        },

        updateSimilar: (
            state: MovieState,
            action: PayloadAction<SimilarsResponse>
        ) => {
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
    setLoading,
    setMovie,
    setImages,
    setVideos,
    setCast,
    setSimilar,
    updateSimilar,
} = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
