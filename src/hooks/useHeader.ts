import { useEffect, useState } from 'react';

export const useHeader = () => {
    const [onTop, setOnTop] = useState(true);

    useEffect(() => {
        window.onscroll = (ev) => {
            var documentElement = document.documentElement;
            var documentAlternative = document.body;
            documentElement = documentElement.clientHeight
                ? documentElement
                : documentAlternative;

            setOnTop(documentElement.scrollTop === 0);
        };
    }, []);

    return onTop;
};
