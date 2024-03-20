import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Animated, Alert } from 'react-native';
import { signUp } from './services/auth';

type Props = {
  navigation: any;
};

const SignUpScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    const success = await signUp(email, password);
    if (success) {
      navigation.navigate('HomeS');
    } else {
      Alert.alert('Error', 'Sign up failed. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../pictures/refer.png')}
          style={styles.logo}
        />
        <Text style={styles.logoText}>My App</Text>
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        <TextInput
          style={[styles.input, { color: 'black' }]}
          placeholder="Email"
          placeholderTextColor={'black'}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={[styles.input, { color: 'black' }]}
          placeholder="Password"
          placeholderTextColor={'black'}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginLink}
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}>
          <Text style={styles.loginText}>Already a Member? Login</Text>
        </TouchableOpacity>
      </View>

      {/* Illustration */}
      <Image
        source={require('../../../pictures/signIn.png')}
        style={styles.illustration}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  formContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 7,
  },
  button: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  illustration: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
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

export default SignUpScreen;
