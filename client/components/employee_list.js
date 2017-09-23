import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail';

const EmployeeList = (props) => {
  console.log(props.employees);
    return (
      <div>
        <div className="employee-list">
          {props.employees.map(employee => <EmployeeDetail employee={employee} />)}
        </div>
      </div>
      );
};


export default createContainer(() => {
    Meteor.subscribe('employees');
    return { employees: Employees.find({}).fetch()};
},EmployeeList);
