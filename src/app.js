import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantInfo from './components/RestaurantInfo';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const AppLayout = () => {
    return <div className='app'>
        <Header />
        <Outlet />
    </div>

}

const appRoute = createBrowserRouter([
    {
        path: '', element: <AppLayout />, errorElement: <Error />, children: [
            { path: '/', element: <Body /> },
            { path: '/about', element: <About /> },
            { path: '/contact', element: <Contact /> },
            { path: 'resinfo/:id', element: <RestaurantInfo /> }
        ],
    },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRoute} />)