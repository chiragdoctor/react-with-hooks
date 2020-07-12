import React, { useEffect } from 'react';

let renderCount = 0;
const Child = () => {
  useEffect(() => {
    renderCount++;
  }, []);
  return <h2>{`renderComponent : ${renderCount}`}</h2>;
};

export default Child;
