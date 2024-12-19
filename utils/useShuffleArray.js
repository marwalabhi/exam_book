import { useState, useEffect } from "react";

const useShuffleArray = (initialArray) => {
  const [shuffledArray, setShuffledArray] = useState([]);

  useEffect(() => {
    const shuffle = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };
    setShuffledArray(shuffle([...initialArray]));
  }, [initialArray]);
  
  return shuffledArray;
};

export default useShuffleArray;
