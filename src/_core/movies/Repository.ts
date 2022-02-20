import { tmdbAPI } from 'constants/configs';
import {
    GenresResponse,
    MovieDayResponse,
    Repository as RepositoryInterface,
} from './types';

export class Repository implements RepositoryInterface {
    getMovieDay(page: number = 1): Promise<MovieDayResponse> {
        return new Promise((resolve, reject) => {
            tmdbAPI
                .get(`/trending/movie/day?page=${page}`)
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
