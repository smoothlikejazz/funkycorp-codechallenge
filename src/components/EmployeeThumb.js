import React from "react";

export default class EmployeeThumb extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {employee} = this.props;

        return (
            <div className="funkycorp-employee-thumb" onClick={this.props.onClick}>
                <img className={"shadow"} src={employee.image} />
            </div>
        );
    }
}