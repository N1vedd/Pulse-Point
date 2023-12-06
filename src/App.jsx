import { HashRouter,Routes,Route } from 'react-router-dom';

import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';
function App() {
  return(
  <HashRouter>
      <AnimatedRoutes/>
  </HashRouter>);
  
  // return <Quiz questions={jsQuizz.questions}/>;
}

export default App
