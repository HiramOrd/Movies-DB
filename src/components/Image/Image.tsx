import { useModal } from 'hooks';
import { Backdrop } from '_core/movie/types';
import './image.scss';
import { ImageModal } from './ImageModal/ImageModal';

interface Props {
    image?: Backdrop;
}

export const Image = ({ image }: Props) => {
    const { toggle, visible } = useModal(false);

    return (
        <div className="image" key={image?.file_path}>
            <img
                src={`https://image.tmdb.org/t/p/w500${image?.file_path}`}
                alt={image?.aspect_ratio + ''}
                height={180}
                width={180 * image?.aspect_ratio!}
                onClick={toggle}
            />
            <ImageModal toggle={toggle} visible={visible} image={image!} />
        </div>
    );
};
