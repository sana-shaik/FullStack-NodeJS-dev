const res = require('express/lib/response');
const Employee = require('../model/employee');
exports.getDefault = (req, res) => {
    res.send('You are in Root');
}

exports.aboutUs = (req, res) => {
    res.send("You are in about us");
}

exports.getEmployees = (req, res) => {
    Employee 
    .find({}, (err, results) => {
        if(err) res.end(err)
        res.json(results)
    })
}

exports.getEmployee = (req, res) => {
    let empToFind = req.params.empName;
    Employee.find({empName: empToFind}, (err,results) => {
        if(err) res.status(400).end('Employee not found');
        res.json(results)
    }) 
}

exports.addEmployee = (req, res) => {
    const empName = req.body.empName;
    const empPass = req.body.empPass;
    const Emp = new Employee();
    Emp.empName = empName;
    Emp.empPass = empPass;
    Emp.save({}, (err) => {
        if(err) res.end(err);
        res.end(`Successfully created Employee: ${empName}`)
    })

    
}

exports.updateEmployee = (req, res) => {
    let empName = req.body.empName;
    let newPass = req.body.empPass;

    Employee.updateOne({empName: empName}, {$set:{empPass: newPass}}, (err,results) => {
        if(err) res.send(err);
        res.end(`Successfully Update ${empName}`)
    })
}

exports.deleteEmployee = (req, res) => {
    let delEmp = req.params.empName;

    Employee.deleteOne({empName: delEmp}, (err, res) => {
        if(err) res.send(err);

        res.end(`Deleted ${delEmp}`)
    })
}