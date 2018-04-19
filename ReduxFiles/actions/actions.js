export const createUser = user => ({
  type: 'CREATE_USER',
  user
});

export const loginUser = user => ({
  type: 'LOGIN_USER',
  user
});