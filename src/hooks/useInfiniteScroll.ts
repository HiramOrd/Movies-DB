import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export const useInfiniteScroll = (
    content: any,
    controller: ScrollController
) => {
    const [isLimit, setLimit] = useState(false);
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        if (content?.page && content.total_pages) {
            if (content?.page < content?.total_pages && isLimit) {
                setPage(page + 1);
            }
        }
    }, [isLimit]);

    useEffect(() => {
        if (page > 1) dispatch(controller.run(page));
    }, [page]);

    return [setLimit, setPage, isLimit, page] as const;
};

export class ScrollController {
    updateData: Function;

    constructor(updateData: Function) {
        this.updateData = updateData;
    }

    run(page: number) {
        return this.updateData(page);
    }
}
export class ScrollIdController extends ScrollController {
    id: string;

    constructor(updateData: Function, id: string) {
        super(updateData);
        this.id = id;
    }

    run(page: number) {
        return this.updateData(this.id, page);
    }
}
