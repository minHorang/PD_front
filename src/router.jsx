import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Main from './pages/main/Main';
import Portfolio from './pages/portfolio/Portfolio';
import Team from './pages/team/Team';
import PDapply from './pages/projectdesign/PDdetail/PDapply';
import Projectdesign from './pages/projectdesign/Projectdesign';
import Mypage from './pages/mypage/Mypage';
import NotFoundError from './pages/error/NotFound';
import Recrdetail from './pages/team/Teamdetail/Recrdetail';
import Portdetail from './pages/portfolio/portdetail/Portdetail';
import PDdetail from './pages/projectdesign/PDdetail/PDdetail';
import DynamicWrite from './pages/write/DynamicWrite';
import Portapply from './pages/portfolio/portdetail/Portapply';
import Recrapply from './pages/team/Teamdetail/Recrapply';
import Teampage from './pages/mypage/Teampage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      //포트폴리오
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path: 'portfolio/:id',
        element: <Portdetail />,
      },
      {
        path: 'portfolio/:id/apply',
        element: <Portapply />,
      },
      //팀
      {
        path: 'team',
        element: <Team />,
      },
      {
        path: 'team/:id',
        element: <Recrdetail />,
      },
      {
        path: 'team/:id/apply',
        element: <Recrapply />,
      },
      //PD
      {
        path: 'projectdesign',
        element: <Projectdesign />,
      },
      {
        path: 'projectdesign/detail/:id',
        element: <PDdetail />,
      },
      {
        path: 'projectdesign/apply',
        element: <PDapply />,
      },
      //마이페이지
      {
        path: 'mypage',
        element: <Mypage />,
      },
      {
        path: 'mypage/team/:id',
        element: <Teampage />,
      },
      {
        path: ':top/:sub',
        element: <DynamicWrite />,
      },
    ],
    errorElement: <NotFoundError />,
  },
]);

export default router;
