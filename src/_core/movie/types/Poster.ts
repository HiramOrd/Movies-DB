export class Poster {
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: number[];
    id?: number;
    title?: string;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    release_date?: Date;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;

    constructor(
        adult?: boolean,
        backdrop_path?: string,
        genre_ids?: number[],
        id?: number,
        title?: string,
        original_language?: string,
        original_title?: string,
        overview?: string,
        popularity?: number,
        poster_path?: string,
        release_date?: Date,
        video?: boolean,
        vote_average?: number,
        vote_count?: number
    ) {
        this.adult = adult;
        this.backdrop_path = backdrop_path;
        this.genre_ids = genre_ids;
        this.id = id;
        this.title = title;
        this.original_language = original_language;
        this.original_title = original_title;
        this.overview = overview;
        this.popularity = popularity;
        this.poster_path = poster_path;
        this.release_date = release_date;
        this.video = video;
        this.vote_average = vote_average;
        this.vote_count = vote_count;
    }
}

export interface Similar {
    page?: number;
    results?: Poster[];
    total_pages?: number;
    total_results?: number;
}
