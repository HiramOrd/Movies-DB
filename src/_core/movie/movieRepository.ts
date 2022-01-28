import { tmdbAPI } from 'constants/configs';
import { Images, Movie, MovieRepository, ReleaseInfo } from './types';

export class movieRepository implements MovieRepository {
    getMovie(movieID: string): Promise<Movie> {
        return new Promise((resolve, reject) => {
            tmdbAPI
                .get(`movie/${movieID}`)
                .then((response) => resolve(response.data))
                .catch(reject);
        });
    }
    getReleaseInfo(movieID: string): Promise<ReleaseInfo> {
        return new Promise((resolve, reject) => {
            tmdbAPI
                .get(`/movie/${movieID}/release_dates`)
                .then((response) => resolve(response.data))
                .catch(reject);
        });
    }
    getImages(movieID: string): Promise<Images> {
        return new Promise((resolve, reject) => {
            tmdbAPI
                .get(`/movie/${movieID}/images?include_image_language=en,null`)
                .then((response) => resolve(response.data))
                .catch(reject);
        });
    }
}
