import { transformRunTime } from 'utils';
import { Movie } from '_core/movie/types';

interface props {
    movie: Movie;
}
export const Overview = ({
    movie: { title, genres, overview, runtime, vote_average, certification },
}: props) => {
    return (
        <div className="movie-overview">
            <h1 className="movie-overview__title">{title}</h1>
            <span className="movie-overview__genres">
                {genres?.map((genre) => genre.name).join(' · ')}
            </span>
            <p className="movie-overview__info">{overview}</p>
            <div className="movie-overview__details">
                {certification && (
                    <div className="movie-overview__details__certification">
                        {certification}
                    </div>
                )}
                <span>{runtime && transformRunTime(runtime)} </span>
                <span className="movie-overview__details__likes">
                    {vote_average && `${vote_average}% liked it`}
                </span>
            </div>
        </div>
    );
};
