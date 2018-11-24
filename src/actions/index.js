import * as types from '../constants/actions_types';

export const selectEmployee = employee => ({ type: types.SELECT_EMPLOYEE, payload:employee });