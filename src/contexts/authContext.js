import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import { API_URL } from '../const';


export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(window.localStorage.getItem("token"));

  
  // const res = await axios.post('https://httpbin.org/post', { answer: 42 });
  //aqui compruebo la contraseña y el pass
  const login = useCallback(function (username,password) {
    console.log(`${API_URL}login`)
    axios
      .post(`${API_URL}login`, {
        username: username,
        password: password
      })
      .then(({data}) => {
        if (data.success) {
          console.log(data)
          window.localStorage.setItem("token", data.token);
          setIsAuthenticated(true);
        }
        else{
          console.log(data)
        }

      });
  }, []);

  const logout = useCallback(function () {
    window.localStorage.removeItem("token");
    setIsAuthenticated(false);
  }, []);

  const value = useMemo(
    () => ({
      login,
      logout,
      isAuthenticated
    }),
    [isAuthenticated, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthContextProvider.propTypes = {
  children: PropTypes.object
};

export function useAuthContext() {
  return useContext(AuthContext);
}