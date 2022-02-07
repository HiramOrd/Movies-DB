import { MovieSummary } from '.';

export interface Poster extends MovieSummary {
    genre_ids?: number[];
}
