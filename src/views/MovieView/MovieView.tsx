import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { Carousel, Image, Section, Video } from 'components';
import { fetchImages, fetchMovie } from '_core/movie/middlewares';
import { MovieBackground, MovieDetails, Overview } from './Components';
import './movieView.scss';
import { fetchVideos } from '_core/movie/middlewares/fetchVideos';

interface Props {
    movieID: string;
}

export const MovieView = ({ movieID }: Props) => {
    const dispatch = useDispatch();
    const { movie, images, videos } = useSelector(
        (state: RootState) => state.movie
    );

    useEffect(() => {
        dispatch(fetchMovie(movieID));
        dispatch(fetchImages(movieID));
        dispatch(fetchVideos(movieID));
    }, [dispatch, movieID]);

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
                </div>
            </div>
        )
    );
};
