import React from 'react';
import { scaleNames } from './utils';

const TemperatureInput = ({ temperature, scale, onTemperatureChange }) => {
  const handleChange = (e) => {
    onTemperatureChange(e.target.value);
  };

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input value={temperature} onChange={handleChange} />
    </fieldset>
  );
};

export default TemperatureInput;
