import employeeList from "../data/employee_list_data";
import {SELECT_EMPLOYEE} from "../constants/actions_types";
import {_getPanelLimit} from "../utils";

const INITIAL_STATE = employeeList.slice(0, _getPanelLimit());

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_EMPLOYEE:
            const newEmployeeList = [
                action.payload,
                ...state
            ];

            newEmployeeList.splice(_getPanelLimit(), 1);

            return newEmployeeList;
        default:
            return state;
    }
};