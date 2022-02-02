import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { Carousel, Image, Poster, Section, Video } from 'components';
import {
    fetchCast,
    fetchImages,
    fetchMovie,
    fetchSimilar,
    fetchVideos,
    updateSimilar,
} from '_core/movie/middlewares';
import { Credits, MovieBackground, MovieDetails, Overview } from './Components';
import './movieView.scss';
import { useInfiniteScroll } from 'hooks';

interface Props {
    movieID: string;
}

export const MovieView = ({ movieID }: Props) => {
    const dispatch = useDispatch();
    const { movie, images, videos, cast, similar } = useSelector(
        (state: RootState) => state.movie
    );
    const { page, setLimit, isLimit } = useInfiniteScroll(similar);

    useEffect(() => {
        dispatch(fetchMovie(movieID));
        dispatch(fetchImages(movieID));
        dispatch(fetchVideos(movieID));
        dispatch(fetchCast(movieID));
        dispatch(fetchSimilar(movieID));
    }, [dispatch, movieID]);

    useEffect(() => {
        if (isLimit) dispatch(updateSimilar(movieID, page));
    }, [page]);

    return (
        movie && (
            <div className="movie-view">
                <MovieBackground
                    backdrop_path={movie.backdrop_path}
                    original_title={movie.original_title}
                />
                <div className="container-first">
                    <Overview movie={movie} />
                    <MovieDetails
                        movie={movie}
                        poster={images?.posters?.at(0)}
                    />

                    {images?.backdrops && (
                        <Section title="Images">
                            <Carousel>
                                {images.backdrops.map((image, i) => (
                                    <Image image={image} key={i} />
                                ))}
                            </Carousel>
                        </Section>
                    )}

                    {!!videos?.length && (
                        <Section title="Videos">
                            <Carousel>
                                {videos.map((video, i) => (
                                    <Video video={video} key={i} />
                                ))}
                            </Carousel>
                        </Section>
                    )}

                    {!!cast?.length && (
                        <Section title="Cast">
                            <Credits cast={cast} />
                        </Section>
                    )}

                    <br />

                    {!!similar?.total_results && (
                        <Section title="Similars">
                            <Carousel scrollLimit={setLimit}>
                                {similar?.results?.map((poster, i) => (
                                    <Poster
                                        posterPath={poster.poster_path}
                                        posterID={poster.id}
                                        key={i}
                                    />
                                ))}
                            </Carousel>
                        </Section>
                    )}

                    <br />
                    <br />
                </div>
            </div>
        )
    );
};
