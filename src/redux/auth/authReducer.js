import { combineReducers } from 'redux';
import actionTypes from './authTypes';
import authTypes from './authTypes';

const userReducer = (
  state = { name: null, email: null, id: '', createdAt: '' },
  { type, payload },
) => {
  switch (type) {
    case actionTypes.REGISTER_SUCCESS:
    case actionTypes.LOGIN_SUCCESS:
    case actionTypes.GET_CURRENT_SUCCESS:
      return payload.user;

    case actionTypes.SET_USER_NAME_TO_STORE:
      return { ...state, name: payload.name };

    case actionTypes.LOGOUT_SUCCESS:
      return { name: null, email: null, id: '', createdAt: '' };

    default:
      return state;
  }
};

const tokenReducer = (state = null, { type, payload }) => {
  switch (type) {
    case actionTypes.REGISTER_SUCCESS:
    case actionTypes.LOGIN_SUCCESS:
    case actionTypes.SET_TOKEN_IN_STORE:
      return payload.token;

    case actionTypes.LOGOUT_SUCCESS:
      return null;

    default:
      return state;
  }
};

const isAuthReducer = (state = false, { type }) => {
  switch (type) {
    case actionTypes.REGISTER_SUCCESS:
    case actionTypes.LOGIN_SUCCESS:
    case actionTypes.SET_TOKEN_IN_STORE:
    case actionTypes.GET_CURRENT_SUCCESS:
      return true;

    case actionTypes.LOGOUT_SUCCESS:
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case actionTypes.REGISTER_FAILURE:
    case actionTypes.LOGIN_FAILURE:
    case actionTypes.GET_CURRENT_FAILURE:
    case actionTypes.LOGOUT_FAILURE:
      return payload.error;
    case authTypes.REGISTER_START:
    case authTypes.LOGIN_START:
    case authTypes.GET_CURRENT_START:
    case authTypes.LOGOUT_START:
      return null;

    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
  token: tokenReducer,
  isAuth: isAuthReducer,
  error: errorReducer,
});
