import { Images, Movie, ReleaseInfo, Videos } from '.';

export interface MovieRepository {
    getMovie(movieID: string): Promise<Movie>;
    getReleaseInfo(movieID: string): Promise<ReleaseInfo>;
    getImages(movieID: string): Promise<Images>;
    getVideos(movieID: string): Promise<Videos>;
}
