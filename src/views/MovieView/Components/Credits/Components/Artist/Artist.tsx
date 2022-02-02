import { getUserImage } from 'utils';
import { Artist as ArtistType } from '_core/movie/types';
import './artist.scss';
interface Props {
    artist: ArtistType;
}
export const Artist = ({ artist }: Props) => {
    return (
        <div className="artist">
            <img
                src={getUserImage(artist.profile_path)}
                alt={artist.id + ''}
                className="artist__image"
            />
            <div>
                <p className="artist__name">{artist.name}</p>
                <p>as {artist.character}</p>
            </div>
        </div>
    );
};
