import { MovieUseCase } from '.';
import { Artist } from '../types';

export class GetCastUseCase extends MovieUseCase {
    async run(movieID: string): Promise<Artist[]> {
        const data = await this.repository.getCast(movieID);
        return data.cast || [];
    }
}
