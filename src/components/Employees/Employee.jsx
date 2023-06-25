import { EmployeesFilter } from './EmployeesFilter'
import { EmployeeList } from './EmployeeList'
import userData from './../../assets/users.json'
import { Component } from 'react'

export class Employees extends Component {
	state = {
		users: userData,
		filterStr: '',
		openToWork: false,
		activeSkill: 'all',
	}

	handleChangeFilter = e => {
		this.setState({ filterStr: e.target.value })
	}
	handleChangeAvailableUsers = () => {
		this.setState(prevState => ({ openToWork: !prevState.openToWork }))
	}
	handleDelete = id => {
		this.setState({ users: this.state.users.filter(user => user.id !== id) })
	}
	handleChangeSkill = skill => {
		this.setState({ activeSkill: skill })
	}

	getFilteredData = () => {
		const { users, filterStr, openToWork, activeSkill } = this.state

		return users
			.filter(
				user =>
					user.name.toUpperCase().includes(filterStr.toUpperCase().trim()) ||
					user.email.toUpperCase().includes(filterStr.toUpperCase().trim())
			)
			.filter(user => (!openToWork ? user : user.isOpenToWork))
			.filter(user =>
				activeSkill === 'all' ? user : user.skills.includes(activeSkill)
			)
	}
	render() {
		const { filterStr, openToWork, activeSkill, users } = this.state
		const filteredData = this.getFilteredData()
		return (
			<>
				<EmployeesFilter
					activeSkill={activeSkill}
					openToWork={openToWork}
					filterStr={filterStr}
					onChangeSkill={this.handleChangeSkill}
					onFilterChange={this.handleChangeFilter}
					onChangeCheckboxFilter={this.handleChangeAvailableUsers}
				/>
				<EmployeeList deleteUser={this.handleDelete} users={filteredData} />
			</>
		)
	}
}
