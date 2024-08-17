import React from 'react';

const BoilingVerdict = ({ celsius }) => {
  return (
    <p>{celsius >= 100 ? 'The water would boil.' : 'The water would not boil.'}</p>
  );
};

export default BoilingVerdict;
