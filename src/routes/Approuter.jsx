import React from 'react'
import Landing from "../pages/Landing/Landing"
import NotFound from "../pages/NotFound/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Butterfly from "../components/butterfly";
import Intro from "../pages/Intro";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

const Approuter = () => {
    const [intro, setIntro] = React.useState(true);
    
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIntro(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Butterfly />

            { intro ? <Intro /> : <RouterProvider router={router} />}
        </>
    )
}

export default Approuter
