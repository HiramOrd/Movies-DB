import { Movie, MovieRepository } from '../types';

export class GetMovieUseCase {
    repository: MovieRepository;

    constructor(repository: MovieRepository) {
        this.repository = repository;
    }

    async run(movieID: string): Promise<Movie> {
        try {
            let movie = await this.repository.getMovie(movieID);
            const info = await this.repository.getReleaseInfo(movieID);

            movie.certification =
                info.results
                    ?.find((country) => country.iso_3166_1 === 'US')
                    ?.release_dates?.find((dates) =>
                        dates.certification?.trim()
                    )?.certification ?? undefined;

            return movie;
        } catch (error) {
            throw error;
        }
    }
}
