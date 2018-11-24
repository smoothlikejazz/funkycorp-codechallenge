import React from "react";
import {connect} from "react-redux";
import EmployeeThumb from "../../components/EmployeeThumb";
import * as actions from "../../actions";

class EmployeeGrid extends React.Component {
    constructor(props) {
        super(props);
        this.employeeSelect.bind(this);
    }

    employeeSelect(employee) {
        // Fixme do some handling here and see if the selected employee is already in the panel list
        if (!this._isAlreadySelected(employee)) {
            // do some highlighting so we know which one is selected
            window.scrollTo(0, 0);
            // propagate event and communicate with main top panel of selected employees
            this.props.selectEmployee(employee);
        }
    }

    _isAlreadySelected(employee) {
        return this.props.panelList.filter(panelEmployee => panelEmployee.id === employee.id).length > 0;
    }

    render() {
        const EmployeeListGrid = this.props.employees.map((employee, i) => {
            return <EmployeeThumb key={employee.id} employee={employee} onClick={() => this.employeeSelect(employee)}/>
        });

        return (
            <div className="funkycorp-employee-grid">
                {EmployeeListGrid}
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {employees, panelList} = state;
    return {employees, panelList}
}

export default connect(mapStateToProps, actions)(EmployeeGrid);

