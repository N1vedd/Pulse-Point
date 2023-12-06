import {Routes,Route,useLocation} from "react-router-dom";
import ShuffleHero from '../Home/Home';
import Quiz from '../Quiz/Quiz';
import {Qn} from '../../constants';
import { AnimatePresence } from "framer-motion";
function AnimatedRoutes(){
    const location = useLocation();
    return(
        <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
            <Route path='/#' element={<ShuffleHero/>}/>
            <Route path='/#/Quiz' element={<Quiz questions={Qn.questions} />}/>
        </Routes>
        </AnimatePresence>
    );
    }

export default AnimatedRoutes;
