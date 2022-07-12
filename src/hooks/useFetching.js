import {useEffect, useState, useRef} from "react";


export const useFetching = (callback, trigger) => {
  const [isLoading, setIsLoading] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) isFirstRender.current = false;
    else return async function fetchData(...args) {
      try {
        setIsLoading(true)
        await callback(...args)
    } catch (e) {
        console.log(e.message);
    } finally {
        setIsLoading(false)
    }
    }
  }, [trigger]);

  return [isLoading];
}