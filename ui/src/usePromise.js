import {useEffect, useState} from 'react';

export function usePromise(fn, dependency) {
  const [val, set] = useState(null);
  useEffect(() => {
    const getAsync = async () => {
      const newVal = await fn();
      set(newVal);
    };
    getAsync();
  }, [fn, dependency]);
  return [val, set];
}
