import React from 'react';
import { View, Text, StyleSheet, Button, Image, TextInput,TouchableOpacity, Alert, KeyboardAvoidingView,SafeAreaView, ScrollView } from 'react-native';
import logo from './assets/caminhao.png';
// import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View 
      style={styles.header}>
      <Image 
      style={styles.logo} source={logo}
      />
    </View>

    <ScrollView>
      <Text style={styles.titulo}>CLIENTES</Text>
      <Text>Nome:</Text>
      <TextInput
        style={styles.input}
        placeholder='Digite seu nome'
        placeholderTextColor="grey"
      />
      <Text style={styles.txt}>CPF:</Text>
      <TextInput
        style={styles.input}
        placeholder='Digite seu CPF'
        placeholderTextColor="grey"
      />
      <Text style={styles.txt}>Data de Nascimento:</Text>
      <TextInput
        style={styles.input}
        placeholder='dd/MM/YYYY'
        placeholderTextColor="grey"
      />
      <Text style={styles.txt}>Telefone:</Text>
      <TextInput
        style={styles.input}
        placeholder='Digite seu telefone'
        placeholderTextColor="grey"
      />
      <Text style={styles.txt}>E-mail:</Text>
      <TextInput
        style={styles.input}
        placeholder='Digite seu e-mail'
        placeholderTextColor="grey"
      />
      <Text style={styles.txt}>Endereço:</Text>
      <TextInput
        style={styles.input}
        placeholder='Digite seu endereço'
        placeholderTextColor="grey"
      />
      <TouchableOpacity style={styles.btnSalvar}>
        <Text>Salvar</Text>
      </TouchableOpacity>
    </ScrollView>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    backgroundColor: 'blue',
    alignItems: 'center',
    width: '100%',
    paddingTop: 30,

  },  
  logo: {
    alignItems: 'center',
    width: 50,
    height: 50,
    marginBottom: 20,
    borderRadius: 200,
    backgroundColor: '#FFF',
    marginTop: 10,

  },
  titulo: { 
    fontSize: 25,
    alignItems: 'center',
    marginLeft: 110,
    padding: 10,

  },
  input: {
    borderColor: '#ccc',
    marginTop: 5,
    width: 350,
    height: 50,
    borderRadius: 40,
    borderWidth: 1,
    padding: 5,
    paddingHorizontal: 20,
  },
  txt: {
    marginTop: 10,
    
  },
  btnSalvar: {
    borderRadius:20,
    backgroundColor: 'blue',
    width: 130,
    height: 40,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginLeft: 110,
  }
});
