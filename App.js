import React, { useState } from 'react';
import { Text, StyleSheet, Image, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import logo from './caminhao.png';

const MENSAGEM_EMAIL = "Digite o seu e-mail.";
const MENSAGEM_SENHA = "Digite sua senha.";

function Login() {
  const navigation = useNavigation();

  const onPress = () => {
    // Realize a lógica de validação de login aqui
    // Se as credenciais forem válidas, navegue para a tela HomePage
    navigation.navigate('homePage');
  };

  return (
    // AULA 08 APRENDER A CONECTAR AS TELAS

    <SafeAreaView style={styles.container}>

      <Text
        style={styles.titulo}>Zé Mudança
      </Text>
      <Image
        style={styles.logo} source={logo}
      />
      <Text
        style={styles.texto}>Login:
      </Text>
      <TextInput
        style={styles.input}
        placeholder={MENSAGEM_EMAIL}
        placeholderTextColor="grey"
      />
      <Text
        style={styles.texto}>Senha:
      </Text>
      <TextInput
        style={styles.input}
        placeholder={MENSAGEM_SENHA}
        placeholderTextColor="grey"
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Acessar </Text>
      </TouchableOpacity>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25,
  },
  titulo: {
    color: '#FFF',
    textShadowColor: '#FFF',
    fontSize: 50,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 200,
    backgroundColor: '#FFF',
    padding: 15,
  },
  input: {
    backgroundColor: '#FFF',
    width: 350,
    height: 50,
    borderRadius: 25,
    textAlign: 'center',
    borderColor: "black",
    fontSize: 25,
  },
  texto: {
    fontSize: 30,
    padding: 10,

  },
  button: {
    backgroundColor: '#DDDDDD',
    width: 150,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 25,
    fontSize: 30,
  }
});

export default Login;
