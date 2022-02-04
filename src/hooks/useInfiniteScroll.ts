import { useEffect, useState } from 'react';

export const useInfiniteScroll = (content: any) => {
    const [isLimit, setLimit] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (content?.page && content.total_pages) {
            if (content?.page < content?.total_pages && isLimit) {
                setPage(page + 1);
            }
        }
    }, [isLimit]);

    return { isLimit, setLimit, page, setPage };
};
