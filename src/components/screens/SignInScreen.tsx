import React, { useState } from 'react';
import {
 View,
 Text,
 TextInput,
 TouchableOpacity,
 StyleSheet,
 Image,
 Animated,
} from 'react-native';
import { logIn, signUp } from './services/auth'; // Adjust the path as necessary

type Props = {navigation:any;};

const SignInScreen = ({navigation}: Props) => {
 const fadeAnim = React.useRef(new Animated.Value(0)).current;
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [isSignUp, setIsSignUp] = useState(false);

 React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
 }, [fadeAnim]);

 const handleSignInOrSignUp = async () => {
    try {
      if (isSignUp) {
        const user = await signUp(email, password);
        console.log('User signed up:', user);
      } else {
        const user = await logIn(email, password);
        console.log('User logged in:', user);
        navigation.navigate('HomeS');
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle the error, e.g., show an error message
    }
 };

 return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, {opacity: fadeAnim}]}>
        <Image
          source={require('../../../pictures/refer.png')}
          style={styles.logo}
        />
        <Text style={styles.logoText}>My App</Text>
      </Animated.View>

      <View style={styles.formContainer}>
        <TextInput
          style={[styles.input, {color: 'black'}]}
          placeholder="Email"
          placeholderTextColor={'black'}
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={[styles.input, {color: 'black'}]}
          placeholder="Password"
          placeholderTextColor={'black'}
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleSignInOrSignUp}>
          <Text style={styles.buttonText}>{isSignUp ? 'Sign Up' : 'Sign In'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.switchLink}
          onPress={() => setIsSignUp(!isSignUp)}>
          <Text style={styles.switchText}>{isSignUp ? 'Already a Member? Sign In' : 'New Member? Sign Up'}</Text>
        </TouchableOpacity>
      </View>

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
 switchLink: {
    marginTop: 10,
 },
 switchText: {
    fontSize: 14,
    color: 'orange',
    justifyContent: 'center',
    alignSelf: 'center',
 },
});

export default SignInScreen;
