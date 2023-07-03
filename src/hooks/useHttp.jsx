import { useEffect, useState } from 'react'

export const useHttp = (apiFn, params) => {
	const [data, setData] = useState([])
	useEffect(() => {
		apiFn(params).then(res => setData(res))
	}, [apiFn, params])
	return [data, setData]
}
