import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from '../views/Home';
import Detail from '../views/Detail';
import Error from '../views/Error';
import Favorites from '../views/Favorites';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen font-display">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/detail/:eventId',
                element: <Detail />,
            },
            {
                path: '/favorites',
                element: <Favorites />,
            },
        ],
    },
]);

const MyRoutes = () => {
    return <RouterProvider router={router} />;
};

export default MyRoutes;
