import { Video } from '_core/_shared/types';
import { MovieUseCase } from '.';

export class GetVideosUseCase extends MovieUseCase {
    async run(movieID: string): Promise<Video[]> {
        const data = await this.repository.getVideos(movieID);
        return data.results || [];
    }
}
