import {easeInOut, motion} from 'framer-motion';

const transition = (Comp) =>{
    return() =>(
        <>
        <Comp/>
        <motion.div className='slide-in'
        initial={{scaleX:0}}
        animate={{scaleX:0}}
        exit={{scaleX:1}}
        transition={{duration:0.5,easeInOut}}
        />
        <motion.div className='slide-out'
        initial={{scaleX:1}}
        animate={{scaleX:0}}
        exit={{scaleX:0}}
        transition={{duration:0.5,easeInOut}}
        />
        </>
    );
    };

    export default transition;