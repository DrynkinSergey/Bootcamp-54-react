import { EmployeesFilter } from './EmployeesFilter'
import { EmployeeList } from './EmployeeList'
import userData from './../../assets/users.json'
import { Component } from 'react'

export class Employees extends Component {
	state = {
		users: userData,
		filterStr: '',
	}

	handleChangeFilter = e => {
		this.setState({ filterStr: e.target.value })
	}

	handleDelete = id => {
		this.setState({ users: this.state.users.filter(user => user.id !== id) })
	}

	getFilteredData = () => {
		const { users, filterStr } = this.state
		return users.filter(el =>
			el.name.toUpperCase().includes(filterStr.toUpperCase().trim())
		)
	}
	render() {
		const { filterStr } = this.state
		const filteredData = this.getFilteredData()
		console.log(filteredData)
		return (
			<>
				<EmployeesFilter
					filterStr={filterStr}
					onFilterChange={this.handleChangeFilter}
				/>
				<EmployeeList deleteUser={this.handleDelete} users={filteredData} />
			</>
		)
	}
}
