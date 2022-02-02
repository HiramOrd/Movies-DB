import { Artist, MovieRepository } from '../types';

export class GetCastUseCase {
    repository: MovieRepository;

    constructor(repository: MovieRepository) {
        this.repository = repository;
    }

    async run(movieID: string): Promise<Artist[]> {
        const data = await this.repository.getCast(movieID);
        return data.cast || [];
    }
}
