export interface Artists {
    id?: number;
    cast?: Artist[];
    crew?: Artist[];
}

export class Artist {
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

    costructor(
        adult?: boolean,
        gender?: number,
        id?: number,
        known_for_department?: string,
        name?: string,
        original_name?: string,
        popularity?: number,
        profile_path?: string,
        cast_id?: number,
        character?: string,
        credit_id?: string,
        order?: number,
        department?: string,
        job?: string
    ) {
        this.adult = adult;
        this.gender = gender;
        this.id = id;
        this.known_for_department = known_for_department;
        this.name = name;
        this.original_name = original_name;
        this.popularity = popularity;
        this.profile_path = profile_path;
        this.cast_id = cast_id;
        this.character = character;
        this.credit_id = credit_id;
        this.order = order;
        this.department = department;
        this.job = job;
    }
}
