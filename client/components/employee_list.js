import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail';

const PER_PAGE = 20;

const EmployeeList = (props) => {
  console.log(props.employees);
    return (
      <div>
        <div className="employee-list">
          {props.employees.map(employee =>
            <EmployeeDetail key={employee._id} employee={employee} />)}
        </div>
        <button onClick={ () => Meteor.subscribe('employees', 40)   }
        className="btn btn-primary"
        >Load more ...
        </button>
      </div>
      );
};


export default createContainer(() => {
    Meteor.subscribe('employees', PER_PAGE);
    return { employees: Employees.find({}).fetch()};
},EmployeeList);
