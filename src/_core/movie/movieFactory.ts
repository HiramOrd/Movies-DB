import { MovieRepository } from './MovieRepository';
import { MovieRepository as MovieRepositoryInterface } from './types';

export class MovieFactory {
    static build<T>(
        useCase: new (movieRepository: MovieRepositoryInterface) => T
    ) {
        const repository = new MovieRepository();
        return new useCase(repository);
    }
}
