import { FunctionComponent, useCallback, useEffect } from 'react';
import './infiniteSection.scss';

interface Props {
    id: string;
    scrollLimit?: any;
}

export const InfiniteSection: FunctionComponent<Props> = ({
    children,
    scrollLimit = null,
    id,
}) => {
    const scrollEvent = useCallback(() => {
        scrollLimit(
            document.documentElement.scrollHeight -
                document.documentElement.scrollTop <=
                document.documentElement.clientHeight + 200
        );
    }, []);

    useEffect(() => {
        document.addEventListener('scroll', scrollEvent);
        return () => {
            document.removeEventListener('scroll', scrollEvent);
        };
    }, []);

    return <div className="search__container">{children}</div>;
};
