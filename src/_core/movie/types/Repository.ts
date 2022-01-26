import { Images, Movie, ReleaseInfo } from '.';

export interface MovieRepository {
    getMovie(movieID: string): Promise<Movie>;
    getReleaseInfo(movieID: string): Promise<ReleaseInfo>;
    getImages(movieID: string): Promise<Images>;
}
