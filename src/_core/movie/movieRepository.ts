import { tmdbAPI } from 'constants/configs';
import {
    Artists,
    Images,
    Movie,
    MovieRepository,
    ReleaseInfo,
    Similar,
    Videos,
} from './types';

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
    getVideos(movieID: string): Promise<Videos> {
        return new Promise((resolve, reject) => {
            tmdbAPI
                .get(`/movie/${movieID}/videos`)
                .then((response) => resolve(response.data))
                .catch(reject);
        });
    }

    getCast(movieID: string): Promise<Artists> {
        return new Promise((resolve, reject) => {
            tmdbAPI
                .get(`/movie/${movieID}/credits`)
                .then((response) => resolve(response.data))
                .catch(reject);
        });
    }

    getSimilar(movieID: string, page: number): Promise<Similar> {
        return new Promise((resolve, reject) => {
            tmdbAPI
                .get(`/movie/${movieID}/similar?page=${page}`)
                .then((response) => resolve(response.data))
                .catch(reject);
        });
    }
}
