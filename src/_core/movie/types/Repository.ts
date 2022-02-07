import { Artist, Image, Video } from '_core/_shared/types';
import { Movie, Poster, ReleaseSummary } from '.';

export interface Repository {
    getReleaseInfo(movieID: string): Promise<ReleaseInfoResponse>;
    getVideos(movieID: string): Promise<VideosResponse>;

    getMovie(movieID: string): Promise<Movie>;
    getImages(movieID: string): Promise<ImagesResponse>;
    getCast(movieID: string): Promise<CreditsResponse>;
    getSimilar(movieID: string, page?: number): Promise<SimilarsResponse>;
}

export interface ImagesResponse {
    backdrops?: Image[];
    id?: number;
    logos?: Image[];
    posters?: Image[];
}

export interface CreditsResponse {
    id?: number;
    cast?: Artist[];
    crew?: Artist[];
}

export interface SimilarsResponse {
    page?: number;
    results?: Poster[];
    total_pages?: number;
    total_results?: number;
}

export class ReleaseInfoResponse {
    id?: number;
    results?: ReleaseSummary[];
}

export interface VideosResponse {
    id?: number;
    results?: Video[];
}
