import { HeaderRoutes } from 'types';

export const headerRoutes: HeaderRoutes[] = [
    {
        name: 'Movies',
        route: '/movies',
    },
    {
        name: 'Tv Shows',
        route: '/tvshows',
    },
];

export const searchExpludes: string[] = ['/movies', '/tvshows'];
