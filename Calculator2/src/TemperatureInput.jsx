const scaleNames = {
	c: 'Celsius',
	f: 'Fahrenheit',
}

export const TemperatureInput = ({
	scale,
	temperature,
	onTemperatureChange,
}) => {
	const handleChange = e => {
		onTemperatureChange(e.target.value)
	}

	return (
		<fieldset>
			<legend>Enter temperature in {scaleNames[scale]}:</legend>
			<input value={temperature} onChange={handleChange} />
		</fieldset>
	)
}
