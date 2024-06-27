import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Tracker2 from "../pages/Tracker2";
import Tracker3 from "../pages/Tracker3";
import Home from "../pages/Home";
import Tracker4 from "../pages/Tracker4";

export const router = createBrowserRouter ([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "tracker2",
                element: <Tracker2 />
            },
            {
                path: "tracker3",
                element: <Tracker3 />
            },
            {
                path: "tracker4",
                element: <Tracker4 />
            },
        ],
    },
]);