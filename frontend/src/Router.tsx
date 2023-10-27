import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Home from './pages/Home';
import ErrorComponent from './components/ErrorComponent';
import NotFound from './pages/NotFound';
import Main from './pages/Hospital/Main/Main';
import HospitalSocket from './sockets/HospitalSocket';
import ParamedicSocket from './sockets/ParamedicSocket';

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
        path: '/hospital',
        element: <Main />,
        errorElement: <ErrorComponent />,
      },
      {
        path: '/hospitalSocket',
        element: <HospitalSocket paramedicId='1'/>,
        errorElement: <ErrorComponent />,
      },
      {
        path: '/paramedicSocket',
        element: <ParamedicSocket hospitalId='1'/>,
        errorElement: <ErrorComponent />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
export default router;
