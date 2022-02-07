import { MovieRepository } from '../types';

export class MovieUseCase {
    repository: MovieRepository;

    constructor(repository: MovieRepository) {
        this.repository = repository;
    }
}
