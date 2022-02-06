import { transformRunTime } from 'utils';
import { Genre } from '_core/movie/types';
import './overview.scss';

interface Props {
    title?: string;
    genres?: Genre[];
    overview?: string;
    runtime?: number;
    certification?: string;
    vote_average?: number;
}

export const Overview = ({
    title,
    genres,
    overview,
    runtime,
    vote_average,
    certification,
}: Props) => {
    return (
        <div className="overview">
            <h1 className="overview__title">{title}</h1>
            <span className="overview__genres">
                {genres?.map((genre) => genre.name).join(' · ')}
            </span>
            <p className="overview__info">{overview}</p>
            <div className="overview__details">
                {certification && (
                    <div className="overview__details__certification">
                        {certification}
                    </div>
                )}
                <span>{runtime && transformRunTime(runtime)} </span>
                <span className="overview__details__likes">
                    {vote_average && `${vote_average}% liked it`}
                </span>
            </div>
        </div>
    );
};
