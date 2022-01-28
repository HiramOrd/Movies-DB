export class Images {
    backdrops?: Backdrop[];
    id?: number;
    logos?: Backdrop[];
    posters?: Backdrop[];

    constructor(
        backdrops?: Backdrop[],
        id?: number,
        logos?: Backdrop[],
        posters?: Backdrop[]
    ) {
        this.backdrops = backdrops;
        this.id = id;
        this.logos = logos;
        this.posters = posters;
    }
}

export interface Backdrop {
    aspect_ratio?: number;
    height?: number;
    iso_639_1?: null | string;
    file_path?: string;
    vote_average?: number;
    vote_count?: number;
    width?: number;
}
