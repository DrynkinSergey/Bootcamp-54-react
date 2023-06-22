import { EmployeesFilter } from './EmployeesFilter'
import { EmployeeList } from './EmployeeList'
import userData from './../../assets/users.json'

export const Employees = () => {
	return (
		<>
			<EmployeesFilter />
			<EmployeeList users={userData} />
		</>
	)
}
