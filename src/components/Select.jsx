export const Select = ({ data, value, setValue }) => {
	return (
		<select value={value} onChange={e => setValue(e.target.value)}>
			{data.map(pos => (
				<option key={pos}>{pos}</option>
			))}
		</select>
	)
}
