import {
    Genre,
    ProductionCompany,
    ProductionCountry,
    SpokenLanguage,
} from '_core/_shared/types';
import { MovieSummary } from '.';

export interface Movie extends MovieSummary {
    belongs_to_collection?: any;
    budget?: number;
    certification?: string;
    genres?: Genre[];
    homepage?: string;
    imdb_id?: string;
    production_companies?: ProductionCompany[];
    production_countries?: ProductionCountry[];
    revenue?: number;
    runtime?: number;
    spoken_languages?: SpokenLanguage[];
    status?: string;
    tagline?: string;
}
