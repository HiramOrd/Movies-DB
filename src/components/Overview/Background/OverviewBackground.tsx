import './overviewBackground.scss';

interface Props {
    backdrop_path?: string;
    original_title?: string;
}

export const OverviewBackground = ({
    backdrop_path,
    original_title = 'background',
}: Props) => {
    return (
        <picture className="overview-background">
            {backdrop_path && (
                <img
                    src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                    alt={original_title}
                />
            )}
        </picture>
    );
};
