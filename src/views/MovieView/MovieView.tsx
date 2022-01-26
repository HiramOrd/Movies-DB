import { Carousel, Section } from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { fetchMovie } from '_core/movie/middlewares';
import { items1, items2 } from '__test__/temp/Covers';
import { MovieBackground, Overview } from './Components';
import './movieView.scss';

interface Props {
    movieID: string;
}

export const MovieView = ({ movieID }: Props) => {
    const dispatch = useDispatch();
    const { movie } = useSelector((state: RootState) => state.movie);

    useEffect(() => {
        dispatch(fetchMovie(movieID));
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
                    <Section title="Images">
                        <Carousel items={items1} />
                    </Section>
                    <Section title="Videos">
                        <Carousel items={items2} />
                    </Section>
                    <Section title="Info">
                        <div>Hola</div>
                    </Section>
                </div>
            </div>
        )
    );
};
