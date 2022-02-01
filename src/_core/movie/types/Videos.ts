export class Video {
    iso_639_1?: string;
    iso_3166_1?: string;
    name?: string;
    key?: string;
    site?: string;
    size?: number;
    type?: Type;
    official?: boolean;
    published_at?: Date;
    id?: string;

    constructor(
        iso_639_1?: string,
        iso_3166_1?: string,
        name?: string,
        key?: string,
        site?: string,
        size?: number,
        type?: Type,
        official?: boolean,
        published_at?: Date,
        id?: string
    ) {
        this.iso_639_1 = iso_639_1;
        this.iso_3166_1 = iso_3166_1;
        this.name = name;
        this.key = key;
        this.site = site;
        this.size = size;
        this.type = type;
        this.official = official;
        this.published_at = published_at;
        this.id = id;
    }
}

export interface Videos {
    id?: number;
    results?: Video[];
}

export enum Type {
    Clip = 'Clip',
    Featurette = 'Featurette',
    Teaser = 'Teaser',
    Trailer = 'Trailer',
}
