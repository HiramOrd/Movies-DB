import { Poster } from '_core/movie/types';
import { Genre } from '_core/_shared/types';

export interface Repository {
    getMovieDay(page?: number): Promise<MoviesResponse>;
    getNowPlaying(page?: number): Promise<MoviesResponse>;
    getTopRated(page?: number): Promise<MoviesResponse>;
    getUpcoming(page?: number): Promise<MoviesResponse>;
    getGenres(): Promise<GenresResponse>;
    getSearch(name: string, page?: number): Promise<MoviesResponse>;
}

export interface MoviesResponse {
    page?: number;
    results?: Poster[];
    total_pages?: number;
    total_results?: number;
}

export interface GenresResponse {
    genres?: Genre[];
}
