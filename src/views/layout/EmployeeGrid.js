import React from "react";
import {connect} from "react-redux";
import EmployeeThumb from "../../components/EmployeeThumb";
import * as actions from "../../actions";

class EmployeeGrid extends React.Component {
    constructor(props) {
        super(props);
        this.employeeSelect.bind(this);
    }

    employeeSelect (employee) {
        // do some highlighting so we know which one is selected

        // propagate event and communicate with main top panel of selected employees
        this.props.selectEmployee(employee);
    }

    render() {
        const EmployeeListGrid = this.props.employees.map((employee, i) => {
            return <EmployeeThumb key={employee.id} employee={employee} onClick={ () => this.employeeSelect(employee)} />
        });

        return (
            <div className="funkycorp-employee-grid">
                {EmployeeListGrid}
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {employees} = state;
    return {employees}
}

export default connect(mapStateToProps, actions)(EmployeeGrid);

