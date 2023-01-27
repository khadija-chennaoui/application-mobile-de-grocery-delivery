import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable
} from 'react-native';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Code pour vérifier les informations de connexion et connecter l'utilisateur
};
const onPressHandler = () => {
        navigation.navigate('register');
      };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion au marché de légumes</Text>
      <TextInput
        style={styles.input}
        placeholder="Adresse e-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Connexion</Text>
      </TouchableOpacity>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}>
        <Text>Go to Reg</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 20,
    marginBottom: 20
  },
  input: {
    width: '90%',
    height: 40,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  button: {
    width: '90%',
    height: 40,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});

export default Login;
