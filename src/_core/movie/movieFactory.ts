import { movieRepository } from './movieRepository';
import { MovieRepository } from './types';

export class MovieFactory {
    static build<T>(useCase: new (movieRepository: MovieRepository) => T) {
        const repository = new movieRepository();
        return new useCase(repository);
    }
}
