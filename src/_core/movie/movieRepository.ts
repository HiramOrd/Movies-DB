import { tmdbAPI } from 'constants/configs';
import {
    CreditsResponse,
    ImagesResponse,
    Movie,
    MovieRepository as MovieRepositoryInterface,
    ReleaseInfoResponse,
    SimilarsResponse,
    VideosResponse,
} from './types';

export class MovieRepository implements MovieRepositoryInterface {
    getMovie(movieID: string): Promise<Movie> {
        return new Promise((resolve, reject) => {
            tmdbAPI
                .get(`movie/${movieID}`)
                .then((response) => resolve(response.data))
                .catch(reject);
        });
    }
    getReleaseInfo(movieID: string): Promise<ReleaseInfoResponse> {
        return new Promise((resolve, reject) => {
            tmdbAPI
                .get(`/movie/${movieID}/release_dates`)
                .then((response) => resolve(response.data))
                .catch(reject);
        });
    }
    getImages(movieID: string): Promise<ImagesResponse> {
        return new Promise((resolve, reject) => {
            tmdbAPI
                .get(`/movie/${movieID}/images?include_image_language=en,null`)
                .then((response) => resolve(response.data))
                .catch(reject);
        });
    }
    getVideos(movieID: string): Promise<VideosResponse> {
        return new Promise((resolve, reject) => {
            tmdbAPI
                .get(`/movie/${movieID}/videos`)
                .then((response) => resolve(response.data))
                .catch(reject);
        });
    }

    getCast(movieID: string): Promise<CreditsResponse> {
        return new Promise((resolve, reject) => {
            tmdbAPI
                .get(`/movie/${movieID}/credits`)
                .then((response) => resolve(response.data))
                .catch(reject);
        });
    }

    getSimilar(movieID: string, page: number): Promise<SimilarsResponse> {
        return new Promise((resolve, reject) => {
            tmdbAPI
                .get(`/movie/${movieID}/similar?page=${page}`)
                .then((response) => resolve(response.data))
                .catch(reject);
        });
    }
}
