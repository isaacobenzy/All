// auth.js
import Parse from "parse";

// Initialize Parse with your Application ID and JavaScript Key
Parse.initialize("248180b4-e828-4e7e-83cf-6240fa9cb41a", "b3a0062a-f60c-4fc9-9be9-53a94887230b");
// Set your Parse Server URL
Parse.serverURL = 'http://127.0.0.1:1337/1';

// Sign Up a new user
export const signUp = async (username, password) => {
 try {
    const user = await Parse.User.signUp(username, password);
    console.log('User signed up:', user);
    return user;
 } catch (error) {
    console.error('Error signing up user:', error);
    throw error;
 }
};

// Log In an existing user
export const logIn = async (username, password) => {
 try {
    const user = await Parse.User.logIn(username, password);
    console.log('User logged in:', user);
    return user;
 } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
 }
};

// Log Out the current user
export const logOut = async () => {
 try {
    await Parse.User.logOut();
    console.log('User logged out');
 } catch (error) {
    console.error('Error logging out user:', error);
    throw error;
 }
};

// Check if a user is currently logged in
export const isLoggedIn = () => {
 return Parse.User.current() !== null;
};

// Get the current logged in user
export const getCurrentUser = () => {
 return Parse.User.current();
};
