import api from '../Api';

export default {
  signIn: async (userAuth: IUserAuth) => {
    return api.post('/login', userAuth);
  },
};
