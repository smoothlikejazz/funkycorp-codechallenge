import {SELECT_EMPLOYEE} from "../constants/actions_types"

export default (state = null, action) => {
    switch (action.type) {
        case SELECT_EMPLOYEE:
            return action.payload;
        default:
            return state;
    }
};