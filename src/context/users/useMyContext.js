import { useContext } from 'react'
import { UserContext } from './context'

export const useMyContext = () => useContext(UserContext)
