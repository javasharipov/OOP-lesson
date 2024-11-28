{
	// * Student
	// *  fname
	// *  lname
	// *  tel
	// *  address
	// *
	// *  getFullName()
	// *  info()

	class Student {
		constructor(name, lastName, telNumber, address) {
			this.name = name
			this.lastName = lastName
			this.telNumber = telNumber
			this.address = address
		}
		fullname() {
			return `${this.name} ${this.lastName}`
		}
		info() {
			return `He is living at the ${this.address} , his number is ${this.telNumber} , his whole name is ${this.name} ${this.lastName} `
		}
	}
	let student1 = new Student('Andrew', 'Tate', 911234567, 'Romania Bucharest')
	console.log(student1.info())
	console.log(student1.fullname())
}

{
	// 	Teacher
	//  *  lname
	//  *  fname
	//  *  address
	//  *  salary
	//  *  level
	//  *
	//  *  getFullName()
	//  *  descrtiption()
	class Teacher {
		constructor(lastName, name, address, salary, level) {
			this.lastName = lastName
			this.name = name
			this.address = address
			this.salary = salary
			this.level = level
		}
		getFullName() {
			return `His full name is ${this.name} ${this.lastName}`
		}
		descrtiption() {
			return `he living at the ${this.address} , his salary is about ${this.salary} , his level is ${this.level} on programming `
		}
	}
	let teacher1 = new Teacher(
		'Rosulov',
		'Boburmirzo',
		'Qoratosh',
		'$2000',
		'Tech-lead'
	)
	console.log(teacher1.getFullName())
	console.log(teacher1.descrtiption())
}

{
	// 	Group
	//  *  name
	//  *  room
	//  *  level
	//  *  studentCounts
	//  *  teacher
	//  *
	//  *  fullInformation()

	class Group {
		constructor(name, room, level, studentCount, teacher) {
			this.name = name
			this.room = room
			this.level = level
			this.studentCount = studentCount
			this.teacher = teacher
		}
		fullInformation() {
			return `Group name ${this.name} , group room ${this.room} , group level ${this.level} , ${this.studentCount} students are studying right now , their main mentor is ${this.teacher}`
		}
	}

	let group = new Group('N-83', 'Slack', 'Middle', '20', 'Mr. Bobutmirzo')
	console.log(group.fullInformation())
}

{
	// Payment
	// *  from = "john"
	// *  to = "nurbek"
	// *  amount = 1000
	// *  date = 1234564564654
	// *  status = false
	// *
	// *  getStatus()
	// *  ==========================

	class Payment {
		constructor(from, to, amount, date, status) {
			this.from = from
			this.to = to
			this.amount = amount
			this.date = date || new Date()
			this.status = status
		}

		getStatus() {
			return `Status: ${this.status}, Date: ${this.date}`
		}
	}

	let payment = new Payment('John', 'Roby', '$20', null, 'completed')
	console.log(payment.getStatus())
}

{
	// 	Salary
	//  *  to = "Mike"
	//  *  amount = 150
	//  *  type = "USD"
	//  *  date = 1231321321321
	//  *  status = true
	//  *
	//  *  getInfo()

	class Salary {
		constructor(to, amount, currency, date, status) {
			this.to = to
			this.amount = amount
			this.currency = currency
			this.date = date || new Date()
			this.status = status
		}

		getInfo() {
			return `From Google to ${this.to} , amount ${this.amount} , currency type ${this.currency} , Date: ${this.date} , Status: ${this.status} `
		}
	}

	let salary = new Salary('Bob', '3500$', 'USD', null, 'paid')
	console.log(salary.getInfo())
}

{
	// 	* Organization
	// 	*  name
	// 	*  founder
	// 	*  address
	// 	*  employeeCount = 400
	// 	*
	// 	*  getInfo()

	class Organization {
		constructor(name, founder, address, employeeCount) {
			this.name = name
			this.founder = founder
			this.address = address
			this.employeeCount = employeeCount
		}
		getInfo() {
			return `Organization: ${this.name} , Founder: ${this.founder} , Address ${this.address} , Employees is approximately ${this.employeeCount}  `
		}
	}
	let organization = new Organization(
		'Najot Ta`lim',
		'Temurbek Adhamov',
		'Chilonzor 1-B',
		'400'
	)

	console.log(organization.getInfo())
}
