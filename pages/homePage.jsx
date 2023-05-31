import React from 'react';
import { View, Text, StyleSheet, Button, Image, TextInput,TouchableOpacity, Alert, KeyboardAvoidingView,SafeAreaView } from 'react-native';
import logo from './assets/caminhao.png';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image 
        style={styles.logo} source={logo}
      />
      <TouchableOpacity style={styles.btn}>
          <Text>CLIENTES</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
          <Text>SERVIÇOS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
          <Text>GERENCIAMENTO</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
          <Text>SITE</Text>
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
    fontStyle: 30,
    
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 200,
    backgroundColor: '#FFF',
    padding: 15,
  },
  btn : {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    backgroundColor: '#FFF',
    color: "black",
    marginTop: 20,
    borderRadius: 25,
    // fontSize: 15,
    
  }
});
