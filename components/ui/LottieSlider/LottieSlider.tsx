import { useEffect, useRef, useState, useCallback } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion, AnimatePresence } from 'framer-motion';
const LottieSlider = () => {
  const useEffectExecuted = useRef<boolean>(false);
  const setTimeOutInstance = useRef<any>(null);
  const [counter, setCounter] = useState<any>(1);
  const [isAnimating, setIsAnimating] = useState<Boolean>(true);
  const handleCounter = useCallback(() => {
    if (useEffectExecuted.current) {
      try {
        // setIsAnimating(false);
        if (counter > 2) {
          setCounter(0);
        }
        // console.log('ss', isAnimating);
        // setIsAnimating(true);
        // console.log('rrrr', isAnimating);
        setCounter((prev: number) => prev + 1);
      } catch (error) {}
    }
  }, [counter]);
  useEffect(() => {
    if (useEffectExecuted.current) {
      setTimeOutInstance.current = setInterval(handleCounter, 8000);
    }
    // the usual logic to be used in the useEffect hook
    useEffectExecuted.current = true;
    return () => clearInterval(setTimeOutInstance.current);
  }, [handleCounter]);
  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={ { opacity: 0 } }
        >
          <Player
            autoplay
            loop
            src={require(`./Lottie-json/data-${counter - 1}.json`)}
            style={{ height: '300px', width: '300px' }}
          ></Player>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LottieSlider;
