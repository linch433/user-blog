import { useRoutes } from 'react-router-dom';
import routes from './routes';

const App = () => {
  const element = useRoutes(routes);

  return <div className='font-alegreyaSans min-h-screen bg-secondary-bg-light'>{element}</div>;
};

export default App;
