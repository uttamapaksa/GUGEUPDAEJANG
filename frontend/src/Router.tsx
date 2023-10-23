import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import ErrorComponent from "./components/ErrorComponent";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children:[
            {
                path: "",
                element: <Home />,
                errorElement: <ErrorComponent />,

            }
        ],
        errorElement: <NotFound />
    }
]);
export default router;
