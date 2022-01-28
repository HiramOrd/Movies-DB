interface props {
    backdrop_path: string | undefined;
    original_title: string | undefined;
}

export const MovieBackground = ({
    backdrop_path,
    original_title = 'background',
}: props) => {
    return (
        <picture className="movie-background">
            {backdrop_path && (
                <img
                    src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                    alt={original_title}
                />
            )}
        </picture>
    );
};
