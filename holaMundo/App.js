import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button} from 'react-native';
import React, {useState} from 'react';

/* creamos nuestro propio componente TEXTO */
const Texto=()=>{
  const [ contenido,setContenido]= useState('Hola :)')
  const actualizarTexto= ()=>{ setContenido('contenido actualizado ')}
  return(
    <Text onPress={actualizarTexto}> {contenido} </Text>  
  )
}



export default function App() {
  return (

    <View style={styles.container}>

      {/* lo usamos 3 veces con etiqueta de apertura y cierre y etoqueta de autocierre */}
      <Texto ></Texto>
      <Texto ></Texto>
      <Texto  />
      
      <Button title='Saludar' color='yellow'></Button>
      
    

      
      <StatusBar style="auto" />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
