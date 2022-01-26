export class ReleaseInfo {
    id?: number;
    results?: Result[];

    constructor(id: number, results: Result[]) {
        this.id = id;
        this.results = results;
    }
}

interface Result {
    iso_3166_1?: string;
    release_dates?: ReleaseDate[];
}

interface ReleaseDate {
    certification?: string;
    iso_639_1?: null | string;
    note?: string;
    release_date?: Date;
    type?: number;
}
