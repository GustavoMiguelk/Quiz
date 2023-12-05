import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import sol from './images/Sol.jpg';
import sunny from './images/sunny.jpg';
import saturn from './images/saturn.jpg';
import bounty from './images/Recompensa.jpg';
import espada from './images/enma.jpg';
import kuri from './images/kuri.jpg';



const questions = [
  {
    question: 'Qual destes era o capitão do Bando Piratas do Sol?',
    options: ['Fisher Tiger', 'Jinbe', 'Arlong', 'Alvida'],
    answer: 'Fisher Tiger',
    image: sol,
  },
  {
    question: 'Quem protegeu o Thousand Sunny durante o timeskip?',
    options: ['Shanks', 'Kuma', 'Rayleigh', 'Nenhum'],
    answer: 'Kuma',
    image: sunny,
  },
  {
    question: 'O que a fruta de Saturn representa?',
    options: ['Kraken', 'Dragão', 'Ushi Oni', 'Emma-Daio'],
    answer: 'Ushi Oni',
    image: saturn,
  },
  {
    question: 'Qual a recompensa atual de Luffy?',
    options: ['3.000.000.000', '500.000.000', '1.500.000.000', '300.000.000'],
    answer: '3.000.000.000',
    image: bounty,
  },
  {
    question: 'Qual o nome da ultima espada que Zoro consegue?',
    options: ['Wado Ichimonji', 'Shusui', 'Griphon', 'Enma'],
    answer: 'Enma',
    image: espada,
  },
  {
    question: 'Quem foi o daimyo de Kuri?',
    options: ['Rocks D. Xebec','Kozuki Oden','Edward Newgate','Kurozumi Orochi'],
    answer: 'Kozuki Oden',
    image: kuri,
  },
];

  const Quiztela = () => {
  const [questao, setquestao] = useState(0);
  const [score, setScore] = useState(0);
  const [opcaoselecionada, setopcaoselecionada] = useState(null);
  const navigation = useNavigation();

  const resposta = () => {
    if (opcaoselecionada === questions[questao].answer) {
      setScore(score + 1);
    }

    if (questao < questions.length - 1) {
      setquestao(questao + 1);
      setopcaoselecionada(null);
    } else {
      navigation.navigate('Resultado',{score });
    }
  };

  return (
    <View style={styles.container}>
      {questions[questao].image && (
        <Image
          source={questions[questao].image}
          style={styles.image}
          resizeMode="contain"
        />
      )}

      <Text style={styles.title}>{questions[questao].question}</Text>
      {questions[questao].options.map((option, index) => (
        <View key={index} style={styles.optionContainer}>
          <Button
            title={option}
            onPress={() => setopcaoselecionada(option)}
            color={opcaoselecionada === option ? 'green' : 'black'}
          />
        </View>
      ))}
      <Button
        title="Responder"
        onPress={resposta}
        disabled={!opcaoselecionada}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
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
  optionContainer: {
    width: '100%',
    marginVertical: 10,
  },
});

export default Quiztela;
