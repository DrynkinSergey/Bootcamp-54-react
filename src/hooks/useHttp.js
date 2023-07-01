import React, { useEffect, useState } from 'react'

export const useHttp = apiFn => {
	const [users, setUsers] = useState([])
	useEffect(() => {
		apiFn().then(res => setUsers(res))
	}, [apiFn])
	return [users, setUsers]
}
