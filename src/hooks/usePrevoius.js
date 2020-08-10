import { useEffect, useRef, useDebugValue } from 'react';

const usePrevious = (value) => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current = value;
  });

  useDebugValue(ref.current > 18 ? 'Adult' : 'Not an Adult');
  return ref.current;
};

export default usePrevious;
