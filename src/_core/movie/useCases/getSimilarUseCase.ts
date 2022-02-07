import { MovieUseCase } from '.';
import { SimilarsResponse } from '../types';

export class GetSimilarUseCase extends MovieUseCase {
    run(movieID: string, page: number = 1): Promise<SimilarsResponse> {
        return this.repository.getSimilar(movieID, page);
    }
}
