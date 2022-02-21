import { HeaderRoutes } from 'types';

export const ROUTES = {
    home: `/`,
    movies: `/movies/`,
    movie: `/movies/movie/`,
};

export const headerRoutes: HeaderRoutes[] = [
    {
        name: 'Movies',
        route: ROUTES.movies,
    },
];

export const searchExpludes: string[] = [ROUTES.movies];
