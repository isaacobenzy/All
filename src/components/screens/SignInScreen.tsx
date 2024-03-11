import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
} from 'react-native';

type Props = {
  navigation: any;
};

const SignInScreen = ({navigation}: Props) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    // Animating the fade-in effect for the logo
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Animated.View style={[styles.logoContainer, {opacity: fadeAnim}]}>
        <Image
          source={require('../../../pictures/refer.png')}
          style={styles.logo}
        />
        <Text style={styles.logoText}>My App</Text>
      </Animated.View>

      {/* Form */}
      <View style={styles.formContainer}>
        <TextInput
          style={[styles.input, {color: 'black'}]}
          placeholder="Email"
          placeholderTextColor={'black'}
        />
        <TextInput
          style={[styles.input, {color: 'black'}]}
          placeholder="Password"
          placeholderTextColor={'black'}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('HomeS');
          }}>
          <Text style={styles.buttonText}>Sign In</Text>
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
});

export default SignInScreen;
