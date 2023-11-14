import { Outlet } from 'react-router-dom';
import AppHeader from '../components/AppHeader';
import Menu from '../components/Menu';

function Root() {
  return (
    <div className="root">
      <Menu />
      <Outlet />
    </div>
  );
}

export default Root;
