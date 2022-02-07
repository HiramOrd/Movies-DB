export interface ReleaseSummary {
    iso_3166_1?: string;
    release_dates?: ReleaseDate[];
}

export interface ReleaseDate {
    certification?: string;
    iso_639_1?: null | string;
    note?: string;
    release_date?: Date;
    type?: number;
}
