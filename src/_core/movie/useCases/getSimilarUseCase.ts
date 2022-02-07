import { MovieUseCase } from '.';
import { Similar } from '../types';

export class GetSimilarUseCase extends MovieUseCase {
    run(movieID: string, page: number = 1): Promise<Similar> {
        return this.repository.getSimilar(movieID, page);
    }
}
