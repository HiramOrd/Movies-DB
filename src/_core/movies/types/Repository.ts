import { Poster } from '_core/movie/types';

export interface Repository {
    getMovieDay(): Promise<MovieDayResponse>;
}

export interface MovieDayResponse {
    page?: number;
    results?: Poster[];
    total_pages?: number;
    total_results?: number;
}
