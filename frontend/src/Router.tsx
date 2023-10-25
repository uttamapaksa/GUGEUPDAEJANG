import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import ErrorComponent from "./components/ErrorComponent";
import NotFound from "./pages/NotFound";
import Main from "./pages/Hospital/Main/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children:[
            {
                path: "",
                element: <Home />,
                errorElement: <ErrorComponent />,

            },
            {
                path: "/hospital",
                element: <Main />,
                errorElement: <ErrorComponent />,

            }
        ],
        errorElement: <NotFound />
    }
]);
export default router;
