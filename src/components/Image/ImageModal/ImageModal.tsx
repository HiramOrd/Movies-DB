import ReactDOM from 'react-dom';
import { Backdrop } from '_core/movie/types';
import './imageModal.scss';

interface Props {
    visible: boolean;
    toggle: any;
    image: Backdrop;
}

export const ImageModal = ({ visible, toggle, image }: Props) => {
    return visible
        ? ReactDOM.createPortal(
              <div className="image-modal">
                  <div className="image-modal__container">
                      <button onClick={toggle} className="image-modal__button">
                          <i className="fas fa-times"></i>
                      </button>
                      <img
                          src={`https://image.tmdb.org/t/p/original${image.file_path}`}
                          alt={image.file_path}
                          className="image-modal__img"
                      />
                  </div>
              </div>,
              document.querySelector('body')!
          )
        : null;
};
