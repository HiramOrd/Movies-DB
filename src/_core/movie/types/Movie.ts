export class Movie {
    adult?: boolean;
    backdrop_path?: string;
    belongs_to_collection?: any;
    budget?: number;
    genres?: Genre[];
    homepage?: string;
    id?: number;
    imdb_id?: string;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string | null;
    production_companies?: ProductionCompany[];
    production_countries?: ProductionCountry[];
    release_date?: Date;
    revenue?: number;
    runtime?: number;
    spoken_languages?: SpokenLanguage[];
    status?: string;
    tagline?: string;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
    certification?: string;

    constructor(
        adult?: boolean,
        backdrop_path?: string,
        belongs_to_collection?: any,
        budget?: number,
        genres?: Genre[],
        homepage?: string,
        id?: number,
        imdb_id?: string,
        original_language?: string,
        original_title?: string,
        overview?: string,
        popularity?: number,
        poster_path?: string | null,
        production_companies?: ProductionCompany[],
        production_countries?: ProductionCountry[],
        release_date?: Date,
        revenue?: number,
        runtime?: number,
        spoken_languages?: SpokenLanguage[],
        status?: string,
        tagline?: string,
        title?: string,
        video?: boolean,
        vote_average?: number,
        vote_count?: number,
        certification?: string
    ) {
        this.adult = adult;
        this.backdrop_path = backdrop_path;
        this.belongs_to_collection = belongs_to_collection;
        this.budget = budget;
        this.genres = genres;
        this.homepage = homepage;
        this.id = id;
        this.imdb_id = imdb_id;
        this.original_language = original_language;
        this.original_title = original_title;
        this.overview = overview;
        this.popularity = popularity;
        this.poster_path = poster_path;
        this.production_companies = production_companies;
        this.production_countries = production_countries;
        this.release_date = release_date;
        this.revenue = revenue;
        this.runtime = runtime;
        this.spoken_languages = spoken_languages;
        this.status = status;
        this.tagline = tagline;
        this.title = title;
        this.video = video;
        this.vote_average = vote_average;
        this.vote_count = vote_count;
        this.certification = certification;
    }
}

interface Genre {
    id?: number;
    name?: string;
}

interface ProductionCompany {
    id?: number;
    logo_path?: null | string;
    name?: string;
    origin_country?: string;
}

interface ProductionCountry {
    iso_3166_1?: string;
    name?: string;
}

interface SpokenLanguage {
    iso_639_1?: string;
    name?: string;
}
