import { Outlet } from 'react-router-dom';
import Menu from '../../components/Menu';
// import Recipe from '../Recipe';
// import Error from '../Error';

import Loading from './Loading';

import './App.scss';

type AppProps = {
  loading?: boolean;
};

function App({ loading }: AppProps) {
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />
      <Outlet />
      {/* <Recipe /> */}
      {/* <Error /> */}
    </div>
  );
}

export default App;
