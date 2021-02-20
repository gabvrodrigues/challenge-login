import AuthActionTypes from './types/AuthActionTypes';

export const loginRequest = (userAuth: IUserAuth) => {
  return {
    type: AuthActionTypes.LOGIN_REQUEST,
    payload: userAuth,
  };
};
export const setLoginSuccess = (authData: IAuth) => {
  return {
    type: AuthActionTypes.SET_LOGIN_SUCCESS,
    payload: authData,
  };
};

export const setLoginError = (message: string) => {
  return {
    type: AuthActionTypes.SET_LOGIN_ERROR,
    payload: message,
  };
};

export const setIsLoadingChars = () => ({
  type: AuthActionTypes.IS_LOADING,
});
