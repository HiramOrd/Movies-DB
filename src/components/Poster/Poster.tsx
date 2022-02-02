interface Props {
    posterPath: string | undefined;
    posterID: number | undefined;
}
export const Poster = ({ posterPath, posterID }: Props) => {
    return (
        <img
            className="anim-zoom"
            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
            alt={`${posterID ?? posterPath}`}
            height={180}
        />
    );
};
