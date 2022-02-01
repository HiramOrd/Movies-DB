import { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import './modal.scss';

interface Props {
    visible: boolean;
    toggle: any;
}

export const Modal: FunctionComponent<Props> = ({
    children,
    visible,
    toggle,
}) => {
    return visible
        ? ReactDOM.createPortal(
              <div className="modal">
                  <div className="modal__container">
                      <button onClick={toggle} className="modal__button">
                          <i className="fas fa-times"></i>
                      </button>
                      {children}
                  </div>
              </div>,
              document.querySelector('body')!
          )
        : null;
};
