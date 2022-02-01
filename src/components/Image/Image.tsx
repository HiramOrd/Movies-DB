import { Modal } from 'components';
import { useModal } from 'hooks';
import { Backdrop } from '_core/movie/types';
import './image.scss';

interface Props {
    image?: Backdrop;
}

export const Image = ({ image }: Props) => {
    const { toggle, visible } = useModal(false);

    return (
        <div className="anim-zoom" key={image?.file_path}>
            <img
                src={`https://image.tmdb.org/t/p/w500${image?.file_path}`}
                alt={image?.aspect_ratio + ''}
                height={180}
                width={180 * image?.aspect_ratio!}
                onClick={toggle}
            />

            <Modal toggle={toggle} visible={visible}>
                <img
                    src={`https://image.tmdb.org/t/p/original${image?.file_path}`}
                    alt={image?.file_path + ''}
                    className="modal__content"
                />
            </Modal>
        </div>
    );
};
