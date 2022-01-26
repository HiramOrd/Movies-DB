import { useRef } from 'react';
import { carouselScroll } from 'utils';
import './carousel.scss';

interface Props {
    items: String[];
}

export const Carousel = ({ items }: Props) => {
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
                {items.map((item, i) => (
                    <div className="carousel-poster" key={i}>
                        <img src={item + ''} alt="movie" />
                    </div>
                ))}
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
