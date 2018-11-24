import React from "react";
import employeeList from "../../data/employee_list_data";
import EmployeeCard from "../../components/EmployeeCard";
import {CSSTransitionGroup} from 'react-transition-group';
import connect from "react-redux/es/connect/connect";
import * as actions from "../../actions";

class EmployeePanelGrid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            employeePanelList: employeeList.slice(0, 3)
        }
    }

    addSelectedEmployee() {

        const newEmployeeList = [
            {
                "id": Math.floor(Math.random() * 100),
                "name": "Jill",
                "position": "CEO",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx2_Fxepv3RExsP9ii7Qoin0XyqEatJHIsqmKGZMWhnVD0vR5FcQ",
                "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            ...this.state.employeePanelList
        ];

        // we only need 3 items to display in the panel, as we add selected employee, remove the 3rd employee from list
        newEmployeeList.splice(3, 1);

        // update state
        this.setState({
            employeePanelList: newEmployeeList
        });
    }

    render() {

        const EmployeeCardList = this.props.panelList.map((employee, index) => {
            return <EmployeeCard key={employee.id} employee={employee}/>
        });

        return (
            <div>
                <CSSTransitionGroup
                    className="funkycorp-employee-panel-grid"
                    transitionName={"panel"}
                    transitionEnterTimeout={1000}
                    transitionLeaveTimeout={1800}
                >
                    {EmployeeCardList}
                </CSSTransitionGroup>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {panelList, selectedEmployee} = state;
    return {
        selectedEmployee,
        panelList
    }
}

export default connect(mapStateToProps)(EmployeePanelGrid);