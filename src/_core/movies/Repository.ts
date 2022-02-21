import { tmdbAPI } from 'constants/configs';
import {
    GenresResponse,
    MoviesResponse,
    Repository as RepositoryInterface,
} from './types';

export class Repository implements RepositoryInterface {
    getMovieDay(page: number = 1): Promise<MoviesResponse> {
        return new Promise((resolve, reject) => {
            tmdbAPI
                .get(`/trending/movie/day?page=${page}`)
                .then((response) => resolve(response.data))
                .catch(reject);
        });
    }

    getNowPlaying(page: number = 1): Promise<MoviesResponse> {
        return new Promise((resolve, reject) => {
            tmdbAPI
                .get(`/movie/now_playing?page=${page}`)
                .then((response) => resolve(response.data))
                .catch(reject);
        });
    }

    getTopRated(page: number = 1): Promise<MoviesResponse> {
        return new Promise((resolve, reject) => {
            tmdbAPI
                .get(`/movie/top_rated?page=${page}`)
                .then((response) => resolve(response.data))
                .catch(reject);
        });
    }

    getUpcoming(page: number = 1): Promise<MoviesResponse> {
        return new Promise((resolve, reject) => {
            tmdbAPI
                .get(`/movie/upcoming?page=${page}`)
                .then((response) => resolve(response.data))
                .catch(reject);
        });
    }

    getGenres(): Promise<GenresResponse> {
        return new Promise((resolve, reject) => {
            tmdbAPI
                .get(`/genre/movie/list`)
                .then((response) => resolve(response.data))
                .catch(reject);
        });
    }
}
