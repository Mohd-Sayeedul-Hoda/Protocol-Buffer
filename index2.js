const Schema = require('./employees_pb.js');
const fs = require('fs');

const sayeed = new Schema.Employee();
sayeed.setId(1001);
sayeed.setName('Sayeed');
sayeed.setSalary(1000);

const hoda = new Schema.Employee();
hoda.setId(1002);
hoda.setName('Hoda');
hoda.setSalary(1500);

const rick = new Schema.Employee();
rick.setId(1003);
rick.setName('Rick');
rick.setSalary(5000);

const employees = new Schema.Employees();
employees.addEmployees(sayeed);
employees.addEmployees(hoda);
employees.addEmployees(rick);
const bytes = employees.serializeBinary();
console.log('binary ' + bytes);
fs.writeFileSync('employeesbinary', bytes);
console.log('My name is ' + hoda.getName());
