import { createContext, useContext, useReducer } from "react";

export const initialState = { theme: false };

export const ContextGlobal = createContext();

const portfolioReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_MODE":
      return { ...state, theme: !state.theme };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(portfolioReducer, initialState);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal);