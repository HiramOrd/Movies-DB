import { MovieUseCase } from '.';
import { Images } from '../types';

export class GetImagesUseCase extends MovieUseCase {
    run(movieID: string): Promise<Images> {
        return this.repository.getImages(movieID);
    }
}
