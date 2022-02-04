import { useEffect } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import { routes } from 'Routes';

function App() {
    const elements = useRoutes(routes);

    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return <div>{elements}</div>;
}

export default App;
