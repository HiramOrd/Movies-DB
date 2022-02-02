import { MovieRepository, Similar } from '../types';

export class GetSimilarUseCase {
    repository: MovieRepository;

    constructor(repository: MovieRepository) {
        this.repository = repository;
    }

    run(movieID: string, page: number = 1): Promise<Similar> {
        return this.repository.getSimilar(movieID, page);
    }
}
