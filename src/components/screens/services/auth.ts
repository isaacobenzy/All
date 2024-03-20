import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from 'parse/react-native';

Parse.serverURL = 'http://127.0.0.1:1337/parse';
Parse.initialize('248180b4-e828-4e7e-83cf-6240fa9cb41a', 'b3a0062a-f60c-4fc9-9be9-53a94887230b');

Parse.setAsyncStorage(AsyncStorage);
Parse.enableLocalDatastore();

export const signUp = async (email: string, password: string) => {
  const user = new Parse.User();
  user.set("username", email);
  user.set("password", password);
  user.set("email", email);

  try {
    await user.signUp();
    return true;
  } catch (error) {
    console.error("Error signing up user", error);
    return false;
  }
};

export const logIn = async (email: string, password: string) => {
  try {
    await Parse.User.logIn(email, password);
    return true;
  } catch (error) {
    console.error("Error logging in user", error);
    return false;
  }
};

export const logOut = async () => {
  try {
    await Parse.User.logOut();
    return true;
  } catch (error) {
    console.error("Error logging out user", error);
    return false;
  }
};

export const isLoggedIn = () => {
  return Parse.User.current() !== null;
};

export default Parse; // Export Parse as default
