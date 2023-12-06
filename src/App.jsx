import { HashRouter,Routes,Route } from 'react-router-dom';

import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';
function App() {
  return(
  <HashRouter basename={process.env.PUBLIC_URL}>
      <AnimatedRoutes/>
  </HashRouter>);
  
  // return <Quiz questions={jsQuizz.questions}/>;
}

export default App
