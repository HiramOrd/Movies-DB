import { useModal } from 'hooks';
import { Artist as ArtistType } from '_core/movie/types';
import { Artist } from './Components';
import './credits.scss';
interface Props {
    cast: ArtistType[];
}
export const Credits = ({ cast }: Props) => {
    const { toggle, visible } = useModal();
    return (
        <>
            <div className="credits-container">
                {cast
                    .map((artist) => <Artist artist={artist} key={artist.id} />)
                    .slice(0, visible ? 9999 : 4)}
            </div>

            <button onClick={toggle} className="credits__button">
                {visible ? 'Less' : 'More'}
            </button>
        </>
    );
};
