import { FunctionComponent, useRef } from 'react';
import { carouselScroll } from 'utils';
import './carousel.scss';

export const Carousel: FunctionComponent<any> = ({ children }) => {
    const container = useRef<HTMLDivElement>(null);

    return (
        <div className="carousel-container">
            <button
                className="carousel-btn left"
                onClick={() => carouselScroll(-1, container.current!)}
            >
                <i className="fas fa-chevron-left"></i>
            </button>
            <div className="carousel-row" ref={container}>
                {children}
            </div>
            <button
                className="carousel-btn right"
                onClick={() => carouselScroll(+1, container.current!)}
            >
                <i className="fas fa-chevron-right"></i>
            </button>
        </div>
    );
};
