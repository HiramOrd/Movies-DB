import './poster.scss';

interface Props {
    posterPath: string | undefined;
    posterID: number | undefined;
}
export const Poster = ({ posterPath, posterID }: Props) => {
    return (
        <img
            className="anim-zoom poster-img"
            src={
                posterPath
                    ? `https://image.tmdb.org/t/p/w500${posterPath}`
                    : '/assets/image_not_found.png'
            }
            alt={`${posterID ?? posterPath}`}
        />
    );
};
