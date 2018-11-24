import {SELECT_EMPLOYEE} from "../constants/actions_types"

const INITIAL_STATE = ""

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_EMPLOYEE:
            return action.payload;
        default:
            return state;
    }
};