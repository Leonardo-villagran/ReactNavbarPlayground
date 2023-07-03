import React, {useContext } from 'react';
import Context from '../Context/Context';

export default () => {
  const {active} = useContext(Context);
  return (
    <>
      <h1>
        Estas en la ruta: <b>{active}</b>
      </h1>
    </>
  );
};
