export class Credits {
    id?: number;
    cast?: Cast[];
    crew?: Cast[];

    constructor ( id?: number, cast?: Cast[], crew?: Cast[] ) {
        this.id = id;
        this.cast = cast;
        this.crew = crew;
    }
}

interface Cast {
    adult?: boolean;
    gender?: number;
    id?: number;
    known_for_department?: string;
    name?: string;
    original_name?: string;
    popularity?: number;
    profile_path?: null | string;
    cast_id?: number;
    character?: string;
    credit_id?: string;
    order?: number;
    department?: string;
    job?: string;
}
