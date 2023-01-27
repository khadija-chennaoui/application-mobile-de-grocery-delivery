import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  ImageBackground
} from 'react-native';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleLogin = () => {
    // Code pour vérifier les informations de connexion et connecter l'utilisateur
  };
  const onPressHandler = () => {
    navigation.navigate('login');
  };
  return (
    <ImageBackground source={require('../assets/reg.png')} style={styles.container}>
      <Text style={styles.title}>Welcom</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Adresse e-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <Pressable  onPress={onPressHandler}>
        <Text>Go to Login</Text>
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    marginBottom: 15 ,
    color:'#604859',
    fontWeight:'bold',
    flexDirection: 'row', 
    alignItems: 'flex-start',
    justifyContent: 'flex-start',

  },
  input: {
    borderBottomWidth: 1, 
    borderBottomColor: '#604859',
    width: '90%',
    padding: 10,
    marginBottom: 10,
  },
  button: {
    width: '90%',
    height: 40,
    backgroundColor: '#604859',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
 
});

export default Register;
