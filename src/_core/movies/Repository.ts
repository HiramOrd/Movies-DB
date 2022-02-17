import { tmdbAPI } from 'constants/configs';
import { MovieDayResponse, Repository as RepositoryInterface } from './types';

export class Repository implements RepositoryInterface {
    getMovieDay(): Promise<MovieDayResponse> {
        return new Promise((resolve, reject) => {
            tmdbAPI
                .get(`/trending/movie/day`)
                .then((response) => resolve(response.data))
                .catch(reject);
        });
    }
}
