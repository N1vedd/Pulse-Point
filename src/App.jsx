import { BrowserRouter,Routes,Route } from 'react-router-dom';

import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';
function App() {
  return(
  <BrowserRouter basename="/Pulse-Point">
      <AnimatedRoutes/>
  </BrowserRouter>);
  
  // return <Quiz questions={jsQuizz.questions}/>;
}

export default App
