import { Poster } from '_core/movie/types';
import { Genre } from '_core/_shared/types';

export interface Repository {
    getMovieDay(page?: number): Promise<MovieDayResponse>;
    getGenres(): Promise<GenresResponse>;
}

export interface MovieDayResponse {
    page?: number;
    results?: Poster[];
    total_pages?: number;
    total_results?: number;
}

export interface GenresResponse {
    genres?: Genre[];
}
