const controller = require("../controller/controller");

const { getDefault, aboutUs, getEmployees, getEmployee, addEmployee, updateEmployee, deleteEmployee } = controller;

module.exports = (router) => {

    router.get('/', getDefault)

    router.get('/aboutus', aboutUs);

    router.get('/getemployees', getEmployees)
    router.get('/getemployee/:empName', getEmployee)

    router.post('/addemployee', addEmployee);

    router.put('/updateemployee', updateEmployee);

    router.delete('/delemployee/:empName', deleteEmployee)


}