export const carouselScroll = (scroll: number, container: HTMLDivElement) => {
    container.scrollLeft += scroll * window.screen.width * 0.65;
};
