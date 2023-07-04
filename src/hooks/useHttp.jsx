import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const useHttp = (apiFn, params) => {
	const [data, setData] = useState([])
	useEffect(() => {
		apiFn(params)
			.then(res => setData(res))
			.catch(error =>
				toast.error(
					error.message === 'canceled'
						? 'Ми обірвали запит через аборт контреллер'
						: error.message
				)
			)
	}, [apiFn, params])
	return [data, setData]
}
