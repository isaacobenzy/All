// auth.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

import Parse from 'parse/react-native';

// Initialize Parse SDK
Parse.setAsyncStorage(AsyncStorage);
Parse.serverURL = 'http://127.0.0.1:1337/parse';
Parse.initialize('248180b4-e828-4e7e-83cf-6240fa9cb41a', 'b3a0062a-f60c-4fc9-9be9-53a94887230b');

interface UserAttributes {
  username: string;
  email: string;
  password: string;
}

// Sign up function
export const signUp = async ({ username, email, password }: UserAttributes) => {
    console.log("manny is the best", email, password)

  const user = new Parse.User();
  user.set('username', username);
  user.set('email', email);
  user.set('password', password);
  console.log("manny is the best")

  try {

    await user.signUp();
    console.log('User signed up:', user);
    return user;
  } catch (error) {
    console.error('Error signing up user:', error);
    throw error;
  }
};

// Log in function
export const logIn = async (email: string, password: string) => {
  try {
    const user = await Parse.User.logIn(email, password);
    console.log('User logged in:', user);
    return user;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

// Navigate to the home screen function
export const navigateToHome = (navigation: any) => {
  navigation.navigate('HomeS');
};
