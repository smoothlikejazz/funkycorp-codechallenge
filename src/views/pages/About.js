import React from "react";
import EmployeeGrid from "../layout/EmployeeGrid";
import EmployeePanelGrid from "../layout/EmployeePanelGrid";


export default class About extends React.Component {

    render() {
        return (
            <div>
                <EmployeePanelGrid />
                <EmployeeGrid />
            </div>
        );
    }
}