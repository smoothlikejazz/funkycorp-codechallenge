import { combineReducers } from 'redux';
import EmployeeReducer from "./EmployeeReducer";
import SelectionReducer from "./SelectionReducer";
import PanelListReducer from "./PanelListReducer";

export default combineReducers({
    employees : EmployeeReducer,
    selectedEmployee: SelectionReducer,
    panelList: PanelListReducer,
});
