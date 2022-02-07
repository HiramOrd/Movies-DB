import { Repository } from '../types';

export class MovieUseCase {
    repository: Repository;

    constructor(repository: Repository) {
        this.repository = repository;
    }
}
