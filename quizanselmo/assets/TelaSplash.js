import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TextInput } from 'react-native';

const TelaSplash = ({ navigation }) => {
  const [name, setName] = useState('');

  const comecarquiz = () => {
    if (name.trim() !== '') {
      navigation.navigate('Quiz', { name });
    } else {
      alert('Por favor, digite seu nome.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./images/onepiecelogo.png')}
        style={styles.image}
      />
      <Text style={styles.bemvindoTexto}>Bem-vindo ao Quiz!</Text>
      <TextInput
        placeholder="Digite seu nome"
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.input}
      />
      <Button title="Começar" onPress={comecarquiz} />
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
  image: {
    width: '100%',
    height: 100,
    marginBottom: 20,
  },
  bemvindoTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default TelaSplash;