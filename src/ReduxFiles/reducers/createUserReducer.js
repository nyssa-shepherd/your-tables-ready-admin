export const createUserReducer = (state = null, action) => {
  switch (action.type) {
  case 'CREATE_USER':
    return action.newUser;
  default:
    return state;
  }
};