import React, { useState } from 'react';
import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';

const toCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;
const toFahrenheit = (celsius) => (celsius * 9 / 5) + 32;
const tryConvert = (temperature, convert) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 10) / 10;
  return rounded.toString();
};

const Calculator = () => {
	const [temperature, setTemperature] = useState('');
	const [scale, setScale] = useState('c');

	const handleTemperatureChange = (temperature, scale) => {
		setScale(scale);
		setTemperature(temperature);
	}

	const celsius =
		scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
	const fahrenheit =
		scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

	return (
		<div>
			<TemperatureInput
				scale='c'
				temperature={celsius}
				onTemperatureChange={temp => handleTemperatureChange(temp, 'c')}
			/>
			<TemperatureInput
				scale='f'
				temperature={fahrenheit}
				onTemperatureChange={temp => handleTemperatureChange(temp, 'f')}
			/>
			<BoilingVerdict celsius={parseFloat(celsius)} />
		</div>
	);
};

export default Calculator;
