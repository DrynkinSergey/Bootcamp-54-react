import { useContext } from 'react'
import { AuthContext } from '../context/ContextProvider'

export const useAuth = () => useContext(AuthContext)
