import { BrowserRouter,Routes,Route } from 'react-router-dom';

import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';
function App() {
  return(
  <BrowserRouter>
      <AnimatedRoutes/>
  </BrowserRouter>);
  
  // return <Quiz questions={jsQuizz.questions}/>;
}

export default App
