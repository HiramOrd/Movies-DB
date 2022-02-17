import { configureStore } from '@reduxjs/toolkit';
import { movieReducer } from '_core/movie/movieReducer';
import { moviesReducer } from '_core/movies/moviesReducer';

export const store = configureStore({
    reducer: {
        movie: movieReducer,
        movies: moviesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
