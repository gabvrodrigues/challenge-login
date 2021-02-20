import React from 'react';
import AuthActionTypes from '../actions/types/AuthActionTypes';
import { loginRequest, setIsLoadingChars } from '../actions/AuthActions';

const initialState: AuthState = {
  auth: {
    isLoggedIn: false,
    user: '',
    token: '',
    isLoading: false,
    loginRequest: loginRequest,
    setIsLoadingChars: setIsLoadingChars,
  },
};

const AuthReducer = (state: AuthState = initialState, action: AuthAction) => {
  switch (action.type) {
    case AuthActionTypes.SET_LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true,
        isLoading: false,
      };
    case AuthActionTypes.SET_LOGIN_ERROR:
      return {
        ...state,
        isLoggedIn: false,
      };
    case AuthActionTypes.IS_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default AuthReducer;
