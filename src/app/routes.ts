import { createBrowserRouter } from 'react-router';
import { Home } from './pages/Home';
import { GameDetail } from './pages/GameDetail';
import { NotFound } from './pages/NotFound';
import { MixLineDesignDoc } from './pages/MixLineDesignDoc';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/game/:gameId',
    Component: GameDetail,
  },
  {
    path: '/design/mixline',
    Component: MixLineDesignDoc,
  },
  {
    path: '*',
    Component: NotFound,
  },
], {
  basename: '/Portfolio/',  // ← 加这一行
});
