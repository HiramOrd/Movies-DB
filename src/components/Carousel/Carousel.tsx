import { FunctionComponent, useEffect, useRef } from 'react';
import { carouselScroll } from 'utils';
import './carousel.scss';

interface Props {
    id: string;
    scrollLimit?: any;
}

export const Carousel: FunctionComponent<Props> = ({
    children,
    scrollLimit = null,
    id,
}) => {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (container.current && scrollLimit) {
            container.current.addEventListener('scroll', () =>
                scrollLimit(
                    container.current!.scrollWidth -
                        container.current!.scrollLeft <=
                        container.current!.clientWidth + 200
                )
            );
        }
    }, []);

    useEffect(() => {
        container!.current!.scrollLeft = 0;
    }, [id]);

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
