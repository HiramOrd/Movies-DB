import { Modal } from 'components';
import { useModal } from 'hooks';
import { Video as Vid } from '_core/movie/types';
import './video.scss';

interface Props {
    video: Vid;
}
export const Video = ({ video }: Props) => {
    const { toggle, visible } = useModal();
    return (
        <div>
            <div className="video anim-zoom">
                <img
                    src={`https://img.youtube.com/vi/${video.key}/0.jpg`}
                    alt={video.id}
                    height={180}
                    width={240}
                />
                <div className="video__icon" onClick={toggle}>
                    <i className="far fa-play-circle"></i>
                </div>
            </div>

            <Modal toggle={toggle} visible={visible}>
                <iframe
                    src={`http://www.youtube.com/embed/${video.key}`}
                    title={video.id}
                    frameBorder="0"
                    allowFullScreen
                    className="modal__content modal__content__video"
                />
            </Modal>
        </div>
    );
};
