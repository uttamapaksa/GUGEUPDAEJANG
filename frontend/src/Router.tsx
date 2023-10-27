import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Home from './pages/Home';
import ErrorComponent from './components/ErrorComponent';
import NotFound from './pages/NotFound';
import PATH from './constants/path';
import PAGE from './constants/page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: PATH.Login,
        element: <PAGE.Login />,
        errorElement: <ErrorComponent />,
      },
      {
        path: PATH.Signup,
        element: <PAGE.Signup />,
        errorElement: <ErrorComponent />,
      },
      {
        path: PATH.Hospital,
        element: <PAGE.Hospital />,
        errorElement: <ErrorComponent />,
      },
      {
        path: PATH.HospitalSocket,
        element: <PAGE.HospitalSocket paramedicId="1" />,
        errorElement: <ErrorComponent />,
      },
      {
        path: PATH.ParamedicSocket,
        element: <PAGE.ParamedicSocket hospitalId="1" />,
        errorElement: <ErrorComponent />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
export default router;
