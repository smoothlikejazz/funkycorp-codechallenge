import React from "react";
import employeeList from "../../data/employee_list_data";
import EmployeeThumb from "../../components/EmployeeThumb";


export default class EmployeeGrid extends React.Component {
    constructor(props) {
        super(props);
        this.employeeSelect.bind(this);
    }

    employeeSelect (employee) {
        // propagate event and communicate with main top panel of selected employees

    }

    render() {
        const EmployeeListGrid = employeeList.map((employee, i) => {
            return <EmployeeThumb key={employee.id} employee={employee} onClick={ () => this.employeeSelect(employee)} />
        });

        return (
            <div className="funkycorp-employee-grid">
                {EmployeeListGrid}
            </div>
        );
    }
}