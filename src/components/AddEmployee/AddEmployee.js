import React from 'react';
import './AddEmployee.css';

const AddEmployee = (props) => {
    const addEmployee = props.addEmployee;
    let totalSalary = 0;
    for (let index = 0; index < addEmployee.length; index++) {
        const salary = addEmployee[index];
        totalSalary = (totalSalary + Number(salary.salary));
        
    }
    return (
        <div className="shadow p-1 list-div">
            <h4>List details</h4>
            <p><b>total items: {addEmployee.length}</b></p>
            <p><b>total salary: {totalSalary}</b></p>
        </div>
    );
};

export default AddEmployee;