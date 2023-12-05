import React from 'react';
import { View, Text, Button, StyleSheet, Image, Linking } from 'react-native';


import odagenio from './images/odagenio.jpg';
import chopper from './images/chopperchorandofeio.jpg'
import luffy from './images/lucareca.jpg';

const Resultado = ({ route, navigation }) => {
  const { score,} = route.params;

  const restartQuiz = () => {
    navigation.navigate('Splash');
  };

  let mensagem = '';
  let imagem = null;

  if (score === 5) {
    mensagem = 'Acertou tudo. Boa!';
    imagem = odagenio;
  } else if (score >= 3) {
    mensagem = 'Foi bem até';
    imagem = luffy;
  } else {
    mensagem = 'Assiste mais uma vez!';
    imagem = chopper;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Você acertou ${score} perguntas!`}</Text>
      {imagem && <Image source={imagem} style={styles.image} />}
      <Text style={styles.message}>{mensagem}</Text>
      <Button title="Reiniciar Quiz" onPress={restartQuiz}  />
     <Text style={styles.dev}> 
       Feito por {''} 
  <Text 
    style={styles.dev} 
    onPress={() => { 
      Linking.openURL('https://github.com/GustavoMiguelk'); 
    }}> 
     Gustavo Miguel 
  </Text> 
</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
   image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  dev: {
    fontSize:'10'
  }
});

export default Resultado;