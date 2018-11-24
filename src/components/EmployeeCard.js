import React from "react";
import EmployeeThumb from "./EmployeeThumb";

export default class EmployeeCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            snippetLimit: 250,
            showSnippet: true,
        }
        this.toggleSnippet.bind(this);
    }

    toggleSnippet() {
        this.setState({
            showSnippet: !this.state.showSnippet
        })
    }


    render() {

        const {employee} = this.props;

        return (
            <div className={`funkycorp-employee-card shadow funkycorp-employee-card-${employee.id}`}
                 onClick={this.props.onClick}>
                <EmployeeThumb employee={employee}/>
                <div className="funkycorp-employee-description-container">
                    <h1 className="funkycorp-header-main">{employee.name}</h1>
                    <h2 className="funkycorp-header-secondary">{employee.position}</h2>

                    <div className={`funkycorp-employee-bio ${this.state.showSnippet ? "collapsed" : ""}`}>
                        {this.state.showSnippet ? employee.bio.substring(0, this.state.snippetLimit) + "..." : employee.bio}
                    </div>

                    <div className="generic-toggle-icon-container">
                        <img onClick={() => this.toggleSnippet()}
                             className={`generic-arrow ${this.state.showSnippet ? "up" : "down"}`}
                             src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3NC42NCA0NzQuNjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ3NC42NCA0NzQuNjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBkPSJNMjM3LjMyLDAuMDE2QzEwNi4yNDksMC4wMTYsMCwxMDYuMjMzLDAsMjM3LjMzNnMxMDYuMjgxLDIzNy4yODgsMjM3LjMyLDIzNy4yODggICAgIHMyMzcuMzItMTA2LjI0OSwyMzcuMzItMjM3LjMyUzM2OC4zOTEsMC4wMTYsMjM3LjMyLDAuMDE2eiBNMjM3LjMyLDQ0Mi44NDFjLTExMy4zMzYsMC0yMDUuNTM3LTkyLjE2OS0yMDUuNTM3LTIwNS41NjkgICAgIFMxMjMuOTgzLDMxLjczNSwyMzcuMzIsMzEuNzM1czIwNS41MzcsOTIuMjMzLDIwNS41MzcsMjA1LjUzN1MzNTAuNjg4LDQ0Mi44NDEsMjM3LjMyLDQ0Mi44NDF6IiBmaWxsPSIjNmU3OWMxIi8+CgkJCTxwYXRoIGQ9Ik0yNDcuNTU0LDE2MS41MzRjLTMuMTE1LTMuMTE1LTcuMTgzLTQuNjA4LTExLjI4My00LjYwOHMtOC4xNjgsMS40OTQtMTEuMjgzLDQuNjA4ICAgICBMMTIxLjkxOCwyNjQuNjA1Yy02LjE5OCw2LjE5OC02LjE5OCwxNi4yNzMsMCwyMi40N2M2LjE5OCw2LjE5OCwxNi4yNzMsNi4xOTgsMjIuNDcsMGw5MS44ODMtOTEuODgzbDkxLjg4Myw5MS44ODMgICAgIGM2LjE5OCw2LjE5OCwxNi4yNzMsNi4xOTgsMjIuNDcsMGM2LjE5OC02LjE5OCw2LjE5OC0xNi4yNzMsMC0yMi40N0wyNDcuNTU0LDE2MS41MzR6IiBmaWxsPSIjNmU3OWMxIi8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="/>
                    </div>
                    <div className={`funkycorp-employee-contact-details ${this.state.showSnippet ? "" : "collapse"}`}>
                        <h2 className="funkycorp-header-secondary">Contact</h2>
                        <ul>
                            <li>E-Mail: Melissa.jawaharial@example.com</li>
                            <li>Mobile: 1-888-888-888</li>
                            <li>Skype: @melissa.jawaharlial</li>
                            <li>Department: Agriculture</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}