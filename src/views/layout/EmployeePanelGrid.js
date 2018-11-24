import React from "react";
import employeeList from "../../data/employee_list_data";
import EmployeeCard from "../../components/EmployeeCard";
import {CSSTransitionGroup} from 'react-transition-group';

export default class EmployeePanelGrid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            employeePanelList : employeeList.slice(0,3)
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

        const EmployeeCardList = this.state.employeePanelList.map((employee, index) => {
            return <EmployeeCard key={employee.id} employee={employee}/>
        });

        return (
            <div>
                <div>
                    {EmployeeCardList}
                </div>
                <div>
                    {/* For Now Add Manually Test Transition Animation Flow*/}
                    <input type="button" onClick={() => this.addSelectedEmployee()} value={"add"}/>
                </div>
            </div>
        );
    }
}