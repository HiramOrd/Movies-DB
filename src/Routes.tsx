import { Navigate, RouteObject } from 'react-router-dom';
import { Layout } from 'layouts/Layout';
import { MoviesView, MovieView } from 'views';
import { ROUTES } from 'constants/routes';

export const routes: RouteObject[] = [
    {
        path: '',
        element: <Layout />,
        children: [
            { index: true, element: <Navigate to={ROUTES.movies} /> },
            {
                path: ROUTES.movies,
                children: [
                    { index: true, element: <MoviesView /> },
                    { path: ROUTES.movie + ':movieID', element: <MovieView /> },
                    { path: '*', element: <Navigate to={ROUTES.movies} /> },
                ],
            },
            { path: '*', element: <Navigate to={ROUTES.movies} /> },
        ],
    },
];
