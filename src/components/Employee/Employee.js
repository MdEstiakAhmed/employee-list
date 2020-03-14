import React, { useState } from 'react';
import employeeData from '../../employeeData';
import './Employee.css';
import EmployeeInfo from '../EmployeeInfo/EmployeeInfo';
import AddEmployee from '../AddEmployee/AddEmployee';

const Employee = () => {
    function addEmployeeInList(employee){
        console.log("click", employee);
        const newAddEmployee = [...addEmployee, employee];
        setAddEmployee(newAddEmployee);
    }

    const [employees, setEmployees] = useState(employeeData);
    const [addEmployee, setAddEmployee] = useState([]);
    return (
        <div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8 product-container">
                    {
                        employees.map(singleEmployee => <EmployeeInfo employee = {singleEmployee} addEmployeeInList = {addEmployeeInList}></EmployeeInfo>)
                    }
                </div>
                <div className="col-2 cart-container">
                    <AddEmployee addEmployee={addEmployee}></AddEmployee>
                </div>
            </div>
        </div>
    );
};

export default Employee;