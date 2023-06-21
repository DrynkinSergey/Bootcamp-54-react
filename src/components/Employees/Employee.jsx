import { EmployeesFilter } from './EmployeesFilter'
import { EmployeeList } from './EmployeeList'
import userData from './../../assets/users.json'
import { styled } from 'styled-components'

export const Employees = () => {
	return (
		<Wrapper>
			<EmployeesFilter />
			<EmployeeList users={userData} />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	margin: 0 auto;
`
