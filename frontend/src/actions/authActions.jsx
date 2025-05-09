// actions/authActions.js
export const logout = () => {
  return {
    type: 'LOGOUT'
  };
};

// reducers/authReducer.js
const initialState = {
  isAuthenticated: false,
  user: null
};

export const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOGIN':
      return { ...state, isAuthenticated: true, user: action.payload };
    case 'LOGOUT':
      return { ...state, isAuthenticated: false, user: null };
    default:
      return state;
  }
};
