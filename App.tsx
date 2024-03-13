
import React from "react";
import { Login } from './src/screens/Login'
import { Cadastrar } from './src/screens/Cadastrar'
import { NativeBaseProvider, Center } from "native-base";
import { StyleSheet, Image } from "react-native";



export default function App() {
  return (
    <NativeBaseProvider>
      <Center
      style={styles.img}>
        <Image
          source={require('./assets/logoBrickin.png')}
        />
      </Center>
      <Cadastrar />
      
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  img:{
    position: 'relative',
    margin: '9%'
  }
})