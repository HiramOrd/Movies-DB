import { Dispatch } from '@reduxjs/toolkit';
import { FactoryRepository } from '../Factory';
import { setSearch, updateSearch as update } from '../moviesReducer';

export const fetchSearch = (name: string) => async (dispatch: Dispatch) => {
    try {
        const repository = FactoryRepository.build();
        const search = await repository.getSearch(name);
        dispatch(setSearch(search));
    } catch (error) {
        console.warn(error);
    }
};

export const updateSearch =
    (name: string, page: number) => async (dispatch: Dispatch) => {
        try {
            const repository = FactoryRepository.build();
            const search = await repository.getSearch(name, page);
            dispatch(update(search));
        } catch (error) {
            console.warn(error);
        }
    };
