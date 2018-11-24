import React from "react";
import EmployeeThumb from "./EmployeeThumb";

export default class EmployeeCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {employee} = this.props;

        return (
            <div className={`funkycorp-employee-card funkycorp-employee-card-${employee.id}`} onClick={this.props.onClick}>
                <EmployeeThumb employee={employee}/>
                <div className="funkycorp-employee-description">
                    <h1>{employee.name}</h1>
                    <h2>{employee.position}</h2>
                    {employee.bio}
                </div>
            </div>
        );
    }
}