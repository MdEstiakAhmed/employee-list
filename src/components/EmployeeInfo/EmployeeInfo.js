import React from 'react';
import './EmployeeInfo.css';

const EmployeeInfo = (props) => {
    const {id, name, email, phone, salary, image} = props.employee;
    // console.log(props.employee);
    return (
        <div>
            <div className="row product-div shadow">
                <div className="col-4">
                    <img className="img-fluid w-75 p-3" src={image} alt=""/>
                </div>
                <div className="col-8 p-1">
                    <h3>ID: {id}</h3>
                    <h4>NAME: {name}</h4>
                    <h4>EMAIL: {email}</h4>
                    <h4>PHONE: {phone}</h4>
                    <h4>SALARY: ${salary}</h4>
                    <button onClick={() => props.addEmployeeInList(props.employee)} name="addEmployee" className="btn btn-primary">ADD</button>
                </div>
            </div>
        </div>
    );
};

export default EmployeeInfo;