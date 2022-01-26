import { Images, MovieRepository } from '../types';

export class GetImagesUseCase {
    repository: MovieRepository;

    constructor(repository: MovieRepository) {
        this.repository = repository;
    }

    run(movieID: string): Promise<Images> {
        return this.repository.getImages(movieID);
    }
}
