export const createUserReducer = (state = null, action) => {
  switch (action.type) {
  case 'CREATE_USER':
    return newUser;
  default:
    return state;
  }
};