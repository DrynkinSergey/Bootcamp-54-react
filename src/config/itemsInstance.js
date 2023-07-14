import axios from 'axios'

export const itemsApi = axios.create({
	baseURL: 'https://dummyjson.com/products',
})

export const getProducts = async () => {
	const { data } = await itemsApi.get()
	return data.products
}
