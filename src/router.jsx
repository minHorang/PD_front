import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Main from './pages/main/Main';
import Board from './pages/board/Board';
import Projectdesign from './pages/projectdesign/Projectdesign';
import Contest from './pages/contest/Contest';
import Mypage from './pages/mypage/Mypage';
import NotFoundError from './pages/error/NotFound';
import Recrdetail from './pages/board/Boarddetail/Recrdetail';
import Portdetail from './pages/board/Boarddetail/Portdetail';
import PDdetail from './pages/projectdesign/PDdetail/PDdetail';
import Apply from './pages/contest/contestdetail/Apply';
import Getteam from './pages/contest/contestdetail/Getteam';
import GTdetail from './pages/contest/contestdetail/GTdetail/GTdetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: 'board',
        element: <Board />,
      },
      {
        path: 'board/recr/:id',
        element: <Recrdetail />,
      },
      {
        path: 'board/port/:id',
        element: <Portdetail />,
      },
      {
        path: 'projectdesign',
        element: <Projectdesign />,
      },
      {
        path: 'projectdesign/detail/:id',
        element: <PDdetail />,
      },
      {
        path: 'contest',
        element: <Contest />,
      },
      {
        path: 'contest/apply',
        element: <Apply />,
      },
      {
        path: 'contest/getteam',
        element: <Getteam />,
      },
      {
        path: 'contest/getteam/detail/:id',
        element: <GTdetail />,
      },
      {
        path: 'mypage',
        element: <Mypage />,
      },
    ],
    errorElement: <NotFoundError />,
  },
]);

export default router;
