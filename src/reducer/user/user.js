import {extend} from '../../utils.js';
import {userAdapter} from '../../adapters/user-adapter';

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const InitialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: {}
};

export const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  GET_USER: `GET_USER`
};

export const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status
    };
  },

  getUser: (userData) => {
    return {
      type: ActionType.GET_USER,
      payload: userData
    };
  }
};

export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.GET_USER:
      return extend(state, {
        user: action.payload,
      });
  }

  return state;
};

export const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        const adaptedUser = userAdapter(response.data);
        dispatch(ActionCreator.getUser(adaptedUser));
      })
      .catch((error) => {
        throw error;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then((response) => {
        const adaptedUser = userAdapter(response.data);
        dispatch(ActionCreator.getUser(adaptedUser));
      })
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      })
      .catch((error) => {
        throw error;
      });
  }
};
