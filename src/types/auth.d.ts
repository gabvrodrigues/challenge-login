interface IAuth {
  isLoggedIn: boolean;
  user?: string;
  token?: string;
  isLoading?: boolean;
  setIsLoadingChars: () => void;
  loginRequest: (userAuth: IUserAuth) => void;
}

interface IUserAuth {
  email: string;
  password: string;
}

type AuthState = {
  auth: IAuth;
};

type AuthAction = {
  type: string;
  payload: IUserAuth;
};

type DispatchType = (args: AuthAction) => AuthAction;
