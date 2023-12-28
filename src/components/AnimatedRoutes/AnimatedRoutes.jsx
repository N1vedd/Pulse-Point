import {Routes,Route,useLocation} from "react-router-dom";
import ShuffleHero from '../Home/Home';
import RetailQuiz from '../Quiz/Retail';
import ConstructionQuiz from '../Quiz/Construction';
import ServiceQuiz from '../Quiz/Service';
import ManufacturingQuiz from '../Quiz/Manufacturing';
import {retailQN} from '../../retail';
import {manufacturingQN} from '../../manufacturing';
import {serviceQN} from '../../service';
import {constructionQN} from '../../construction';
import { AnimatePresence } from "framer-motion";
function AnimatedRoutes(){
    const location = useLocation();
    return(
        <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<ShuffleHero/>}/>
            <Route path='/Retail' element={<RetailQuiz questions={retailQN.questions} />}/>
            <Route path='/Manufacturing' element={<ManufacturingQuiz questions={manufacturingQN.questions} />}/>
            <Route path='/Service' element={<ServiceQuiz questions={serviceQN.questions} />}/>
            <Route path='/Construction' element={<ConstructionQuiz questions={constructionQN.questions} />}/>
        </Routes>
        </AnimatePresence>
    );
    }

export default AnimatedRoutes;
