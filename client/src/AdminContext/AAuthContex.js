// import { useEffect } from "react";
import { useReducer } from "react";
import { createContext, useEffect} from "react";
import AdminAuthReducer from "./AAuthReducer";

const INITIAL_STATE = {
  admin:JSON.parse(localStorage.getItem("admin")) || null,
  isFetching: false,
  error: false,
};

export const AdminAuthContext = createContext(INITIAL_STATE);

export const AdminAuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AdminAuthReducer, INITIAL_STATE);

    
  useEffect(()=>{
    localStorage.setItem("admin", JSON.stringify(state.admin))
  },[state.admin])
  

  return (
    <AdminAuthContext.Provider
      value={{
        admin: state.admin,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
};


// import { createContext, useEffect, useReducer } from "react";
// import AuthReducer from "./AuthReducer";

// const INITIAL_STATE = {
//   user:JSON.parse(localStorage.getItem("user")) || null,
//   isFetching: false,
//   error: false,
// };


// export const AuthContext = createContext(INITIAL_STATE);

// export const AuthContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  
//   useEffect(()=>{
//     localStorage.setItem("user", JSON.stringify(state.user))
//   },[state.user])
  
//   return (
//     <AuthContext.Provider
//       value={{
//         user: state.user,
//         isFetching: state.isFetching,
//         error: state.error,
//         dispatch,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };
