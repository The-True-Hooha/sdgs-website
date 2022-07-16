import { useEffect, useRef, useState } from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const LottieSlider = () => {
  const container = useRef<any>(null);
  const useEffectExecuted = useRef<boolean>(false);
  const setTimeOutInstance = useRef<any>(null);
  const [counter, setCounter] = useState<any>(1);

  useEffect(() => {
    if (useEffectExecuted.current) {
      const lottieSliderJson = () => {
        if (counter > 1) {
          setCounter(0);
        }
        setCounter((prev: number) => prev + 1);
      };
      setTimeOutInstance.current = setTimeout(lottieSliderJson, 5000);
    }
    // the usual logic to be used in the useEffect hook
    useEffectExecuted.current = true;
    return () => clearTimeout(setTimeOutInstance.current);
  }, [counter]);
  return (
    <div ref={container}>
      <Player
        autoplay
        loop
        src={require(`./Lottie-json/data-${counter - 1}.json`)}
        style={{ height: '300px', width: '300px' }}
      ></Player>
    </div>
  );
};

export default LottieSlider;
