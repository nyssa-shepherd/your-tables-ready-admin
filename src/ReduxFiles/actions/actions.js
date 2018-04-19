export const createUser = newUser => ({
  type: 'CREATE_USER',
  newUser
});

export const loginUser = user => ({
  type: 'LOGIN_USER',
  user
});