import { useRoutes } from 'react-router-dom';
import routes from './routes';

const App = () => {
  const element = useRoutes(routes);

  return <div className="font-alegreyaSans min-h-screen">{element}</div>;
};

export default App;
