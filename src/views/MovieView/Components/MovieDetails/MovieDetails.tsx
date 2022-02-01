import { Section } from 'components';
import { currencyFormat } from 'utils';
import { Backdrop, Movie } from '_core/movie/types';
import './movieDetails.scss';

interface Props {
    movie: Movie;
    poster: Backdrop | undefined;
}

export const MovieDetails = ({ movie, poster }: Props) => {
    return (
        <Section title="Details">
            <div className="movie-details">
                {poster && (
                    <picture className="movie-details__picture">
                        <img
                            className="movie-details__img"
                            src={`https://image.tmdb.org/t/p/original${poster.file_path}`}
                            alt={movie.id + ''}
                        />
                    </picture>
                )}
                <div>
                    <div className="movie-details__section">
                        <h3 className="movie-details__section__title">
                            {movie.title}
                        </h3>
                        <span>{movie.tagline}</span>
                    </div>

                    <div className="movie-details__section">
                        <b className="movie-details__section__title">
                            Release Date
                        </b>
                        <span>{movie.release_date}</span>
                    </div>

                    <div className="movie-details__multi-sections">
                        {movie.budget && movie.revenue && (
                            <div className="movie-details__multi-sections">
                                <div className="movie-details__section">
                                    <b className="movie-details__section__title">
                                        Budget
                                    </b>
                                    <span>{currencyFormat(movie.budget)}</span>
                                </div>

                                <div className="movie-details__section">
                                    <b className="movie-details__section__title">
                                        Revenue
                                    </b>
                                    <span>{currencyFormat(movie.revenue)}</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="movie-details__section">
                        <b className="movie-details__section__title">
                            Languages
                        </b>
                        {movie.spoken_languages?.map((genre) => (
                            <p key={genre.name + ''}>{genre.name}</p>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="movie-details__section">
                        <b className="movie-details__section__title">
                            Production Companies
                        </b>
                        {movie.production_companies?.map((genre) => (
                            <p key={genre.id + ''}>{genre.name}</p>
                        ))}
                    </div>

                    <div className="movie-details__section">
                        <b className="movie-details__section__title">
                            Countries
                        </b>
                        {movie.production_countries?.map((genre) => (
                            <p key={genre.name + ''}>{genre.name}</p>
                        ))}
                    </div>

                    <div className="movie-details__section">
                        <b className="movie-details__section__title">
                            Web page
                        </b>
                        <a
                            href={movie.homepage}
                            target="blank"
                            className="btn-link"
                        >
                            Link
                        </a>
                    </div>
                </div>
            </div>
        </Section>
    );
};
