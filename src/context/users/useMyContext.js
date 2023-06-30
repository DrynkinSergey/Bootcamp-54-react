import { useContext } from 'react'
import { UserContext } from './UserContext'

export const useMyContext = () => useContext(UserContext)
