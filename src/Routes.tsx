import { Navigate, RouteObject } from 'react-router-dom';
import { Layout } from 'layouts/Layout';
import { MoviesView, MovieView } from 'views';

export const routes: RouteObject[] = [
    {
        path: '',
        element: <Layout />,
        children: [
            { index: true, element: <Navigate to="movies" /> },
            {
                path: 'movies',
                children: [
                    { index: true, element: <MoviesView /> },
                    { path: 'movie/:movieID', element: <MovieView /> },
                    { path: '*', element: <Navigate to="" /> },
                ],
            },
            { path: '*', element: <Navigate to="movies" /> },
        ],
    },
];
