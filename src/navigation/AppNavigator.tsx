import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../components/screens/WelcomeScreen';
import LoginScreen from '../components/screens/LoginScreen';
import SignInScreen from '../components/screens/SignInScreen';
import HomeScreen from '../components/screens/HomeScreen';
import { isLoggedIn } from '../services/auth'; // Assuming you have a function to check if the user is logged in

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      const loggedIn = await isLoggedIn();
      setAuthenticated(loggedIn);
    };

    checkAuthentication();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={authenticated ? "HomeS" : "WelcomeScreen"}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="HomeS" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
