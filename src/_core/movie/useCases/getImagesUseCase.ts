import { MovieUseCase } from '.';
import { ImagesResponse } from '../types';

export class GetImagesUseCase extends MovieUseCase {
    run(movieID: string): Promise<ImagesResponse> {
        return this.repository.getImages(movieID);
    }
}
