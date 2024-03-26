import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Parse from 'parse/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';

type RootStackParamList = {
  Task: undefined;
  // Add other screen names here if necessary
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Task'>;

interface LoginProps {
  navigation: LoginScreenNavigationProp;
}

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize("248180b4-e828-4e7e-83cf-6240fa9cb41a", "$2a$10$6s1Iv4hhJIzJY4.EcrbmfeOQrkwtwr7wAgXIpjXdi3Z/4FZVRX4q6");
Parse.serverURL = 'http://127.0.0.1:1337/1';


const Login: React.FC<LoginProps> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const user = await Parse.User.logIn(username, password);
      navigation.navigate('Task');
      console.log("Logged in user:", user.id);
    } catch (error) {
      setError("Invalid username or password"); // Set an error message here
      console.error("Error: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <Animatable.Text animation="fadeInDown" style={styles.title}>Login</Animatable.Text>
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
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
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

export default Login;
