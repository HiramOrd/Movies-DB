import { Artists, Images, Movie, ReleaseInfo, Similar, Videos } from '.';

export interface MovieRepository {
    getMovie(movieID: string): Promise<Movie>;
    getReleaseInfo(movieID: string): Promise<ReleaseInfo>;
    getImages(movieID: string): Promise<Images>;
    getVideos(movieID: string): Promise<Videos>;
    getCast(movieID: string): Promise<Artists>;
    getSimilar(movieID: string, page: number): Promise<Similar>;
}
