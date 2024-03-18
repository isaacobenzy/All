import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { logIn } from './services/auth'; // Adjust the path as necessary

type Props = {
 navigation: any;
};

const LoginScreen = ({ navigation }: Props) => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const handleLogin = async () => {
    try {
      await logIn(email, password);
      // Navigate to the home screen
      navigation.navigate('HomeS');
    } catch (error) {
      // Handle login failure, such as showing an error message
      Alert.alert('Login Failed', 'Invalid email or password. Please try again.');
    }
 };

 return (
    <View style={styles.container}>
      <Text style={styles.title}>Ecommerce Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginLink}
        onPress={() => {
          navigation.navigate('Sign in');
        }}>
        <Text style={styles.loginText}>New Member? Sign-up</Text>
      </TouchableOpacity>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
 },
 title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
 },
 input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
 },
 button: {
    backgroundColor: 'orange',
    width: '100%',
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
 },
 buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
 },
 loginLink: {
    marginTop: 10,
 },
 loginText: {
    fontSize: 14,
    color: 'orange',
    justifyContent: 'center',
    alignSelf: 'center',
 },
});

export default LoginScreen;
