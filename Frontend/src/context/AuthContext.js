import React, { createContext, useState, useContext, useEffect } from 'react';
import { login, signup } from '../api'; // Import the API functions you created for login/signup

// Create the authentication context
const AuthContext = createContext();

// Custom hook to access authentication data and actions
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to wrap the application and provide auth state
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null); // State to store user authentication data

  // On page load, check if the user is already authenticated (e.g., from localStorage)
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setAuth(JSON.parse(userData)); // If user exists in localStorage, set the auth state
    }
  }, []);

  // Login functionality
  const loginUser = async (email, password) => {
    try {
      const user = await login(email, password); // Make the login API call
      localStorage.setItem('user', JSON.stringify(user)); // Save user data to localStorage
      setAuth(user); // Update auth state with user data
    } catch (error) {
      console.error(error); // Handle any errors during login
    }
  };

  // Signup functionality
  const signupUser = async (email, password) => {
    try {
      const user = await signup(email, password); // Make the signup API call
      localStorage.setItem('user', JSON.stringify(user)); // Save user data to localStorage
      setAuth(user); // Update auth state with user data
    } catch (error) {
      console.error(error); // Handle any errors during signup
    }
  };

  // Logout functionality
  const logoutUser = () => {
    localStorage.removeItem('user'); // Remove user data from localStorage
    setAuth(null); // Reset the auth state
  };

  return (
    <AuthContext.Provider value={{ auth, loginUser, signupUser, logoutUser }}>
      {children} {/* The children components will have access to the AuthContext */}
    </AuthContext.Provider>
  );
};
