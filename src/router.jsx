import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Main from './pages/main/Main';
import Board from './pages/board/Board';
import Projectdesign from './pages/projectdesign/Projectdesign';
import PDapply from './pages/projectdesign/PDdetail/PDapply';
import Contest from './pages/contest/Contest';
import Mypage from './pages/mypage/Mypage';
import NotFoundError from './pages/error/NotFound';
import Recrdetail from './pages/board/Boarddetail/Recrdetail';
import Portdetail from './pages/board/Boarddetail/Portdetail';
import PDdetail from './pages/projectdesign/PDdetail/PDdetail';
import Conapply from './pages/contest/contestdetail/Conapply';
import Getteam from './pages/contest/contestdetail/Getteam';
import GTdetail from './pages/contest/contestdetail/GTdetail/GTdetail';
import GTapply from './pages/contest/contestdetail/GTdetail/GTapply';
import DynamicWrite from './pages/write/DynamicWrite';
import Portapply from './pages/board/Boarddetail/Portapply';
import Recrapply from './pages/board/Boarddetail/Recrapply';

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
        path: '/board/recr/apply',
        element: <Recrapply />,
      },
      {
        path: 'board/port/:id',
        element: <Portdetail />,
      },
      {
        path: '/board/port/apply',
        element: <Portapply />,
      },
      {
        path: 'projectdesign',
        element: <Projectdesign />,
      },
      {
        path: 'projectdesign/apply',
        element: <PDapply />,
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
        element: <Conapply />,
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
        path: 'contest/getteam/apply',
        element: <GTapply />,
      },
      {
        path: 'mypage',
        element: <Mypage />,
      },
      {
        path: ':top/:sub/:final',
        element: <DynamicWrite />, // 동적 경로 처리
      },
    ],
    errorElement: <NotFoundError />,
  },
]);

export default router;
