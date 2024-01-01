// UserContext.jsx
import { createContext, useReducer } from 'react';

const initialState = {
  user: null,
  isLoggedIn: false,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'USER':
      return {
        ...state,
        user: action.payload,
        isLoggedIn: action.payload !== null,
      };
    default:
      return state;
  }
};

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
