import { MovieRepository, Video } from '../types';

export class GetVideosUseCase {
    repository: MovieRepository;

    constructor(repository: MovieRepository) {
        this.repository = repository;
    }

    async run(movieID: string): Promise<Video[]> {
        const data = await this.repository.getVideos(movieID);
        return data.results || [];
    }
}
