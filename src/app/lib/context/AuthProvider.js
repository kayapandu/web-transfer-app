'use client';

import { useContext, createContext, useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

import authService from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== undefined) {
      const currentToken = window?.localStorage?.getItem('userToken') ? localStorage.getItem('userToken') : false;
      setToken(currentToken);
    }
  }, [token]);

  const loginAction = async (state, formData) => {
    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
    };

    try {
      authService.login(data)
        .then(res => {
          if (res) {
            setToken(res.token);
            localStorage.setItem('userToken', res.token);
            router.push('/dashboard');
            return;
          }

          throw new Error(res.message);
        })
    } catch (err) {
      console.error(err);
      return 'Terjadi Kesalahan!'
    }
  };

  const registerAction = async (state, formData) => {
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    };

    console.log(data);
    try {
      authService.register(data)
        .then(res => {
          if (res) {
            router.push('/login');
            return Promise.resolve(res);
          }

          throw new Error(res.message);
        })
    } catch (err) {
      console.error(err);
    }
  }

  const logOut = () => {
    setToken("");
    localStorage.removeItem('userToken');
    router.push('login');
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!token, token, loginAction, logOut, registerAction }}
    >
      {children}
    </AuthContext.Provider>
  );

};

export const useAuth = () => {
  return useContext(AuthContext);
};