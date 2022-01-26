import { configureStore } from '@reduxjs/toolkit';
import { movieReducer } from '_core/movie/movieReducer';

export const store = configureStore({
    reducer: {
        movie: movieReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
