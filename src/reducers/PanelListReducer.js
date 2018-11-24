import employeeList from "../data/employee_list_data";
import {SELECT_EMPLOYEE} from "../constants/actions_types";

const INITIAL_STATE = employeeList.slice(0, 3);

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_EMPLOYEE:
            // need to add logic to update the panelList
            //TODO check if selected item is already in the existing panellist
            const newEmployeeList = [
                action.payload,
                ...state
            ];

            newEmployeeList.splice(3, 1);

            return newEmployeeList;
        default:
            return state;
    }
};