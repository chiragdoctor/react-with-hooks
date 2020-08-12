//@flow
import * as React from 'react';

type MyCompProps = {
  name: string, // mandatory prop
  age?: Number, // optional prop
  children: React.Node,
};

const MyComp = (props: MyCompProps) => {
  return <div>HI, {props.name}</div>;
};

MyComp.defaultProps = {
  name: 'Chirag',
  children: <div>default</div>,
};

export default MyComp;
