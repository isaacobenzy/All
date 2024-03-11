
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import HomeScreen from '../components/screens/HomeScreen';
import ProductDetailsScreen from '../components/screens/ProductDetailsScreen';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../components/screens/SignInScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import ProductDet from 'react-native-vector-icons/MaterialIcons';
import UserScreen from '../components/screens/UserScreen';
import User from "react-native-vector-icons/Feather";

// import { SafeAreaProvider } from 'react-native-safe-area-context';

/**
 * Represents the home tab navigator.
 */
const Tab = createMaterialBottomTabNavigator();

/**
 * Represents the stack navigator.
 */
const Stack = createStackNavigator();

/**
 * Represents the home component.
 * It contains the home screen and product details screen.
 */
function HomeStack() {
  return (
    <Tab.Navigator activeColor="blue">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="home" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <ProductDet
              name="production-quantity-limits"
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarIcon: ({color}) => (
            <User
              name="user"
              size={20}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


/**
 * Represents the main app navigator.
 * It contains the navigation container and stack navigator.
 */
const AppNavigator = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Sign In">
        <Stack.Screen name="Sign In" component={SignInScreen} />
        <Stack.Screen
          name="HomeS"
          component={HomeStack}
          options={{headerShown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
