import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Parse from 'parse/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Task: undefined;
  // Add other screen names here if necessary
};

type SignUpScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Task'>;

interface SignUpProps {
  navigation: SignUpScreenNavigationProp;
}

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize("248180b4-e828-4e7e-83cf-6240fa9cb41a", "$2a$10$6s1Iv4hhJIzJY4.EcrbmfeOQrkwtwr7wAgXIpjXdi3Z/4FZVRX4q6");
Parse.serverURL = 'http://127.0.0.1:1337/1';


const SignUp: React.FC<SignUpProps> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  
  const handleSignup = async () => {
   console.log("Attempting to sign up user...");
   if (password !== confirmPassword) {
      setError("Passwords don't match.");
      return;
   }
  
   try {
      const user = new Parse.User();
      user.set("username", username);
      user.set("password", password);
      console.log("Signing up user...");
      await user.signUp();
      console.log("Success!", user.id);
      navigation.navigate('Task');
   } catch (error) {
      console.error("Error signing up: ", error);
      setError("Error signing up");
   }
  };
  
  return (
    <View style={styles.container}>
      <Animatable.Text animation="fadeInDown" style={styles.title}>Sign Up</Animatable.Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        onChangeText={text => setConfirmPassword(text)}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default SignUp;
