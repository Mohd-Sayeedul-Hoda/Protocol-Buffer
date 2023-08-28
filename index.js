const fs = require('fs');
const employees = [];

employees.push({
	name: 'Sayeed',
	salary: 1000,
	id: 1001,
});

const hoda = {
	name: 'Hoda',
	salary: 1000,
	id: 1002,
};
employees.push(hoda);

employees.push({
	name: 'Rick',
	salary: 5000,
	id: 1003,
});

fs.writeFileSync('jsondata.json', JSON.stringify(employees));
console.log(JSON.stringify(employees));
