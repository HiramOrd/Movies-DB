import { MovieUseCase } from '.';
import { Video } from '../types';

export class GetVideosUseCase extends MovieUseCase {
    async run(movieID: string): Promise<Video[]> {
        const data = await this.repository.getVideos(movieID);
        return data.results || [];
    }
}
