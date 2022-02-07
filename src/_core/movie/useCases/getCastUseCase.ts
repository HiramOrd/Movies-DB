import { Artist } from '_core/_shared/types';
import { MovieUseCase } from '.';

export class GetCastUseCase extends MovieUseCase {
    async run(movieID: string): Promise<Artist[]> {
        const data = await this.repository.getCast(movieID);
        return data.cast || [];
    }
}
