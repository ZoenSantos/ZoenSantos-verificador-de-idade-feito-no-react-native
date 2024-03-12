import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  const verificarIdade = () => {
    if (idade === '') {
      alert('Por favor, insira sua idade.');
      return;
    }

    const idadeNum = parseInt(idade);

    if (isNaN(idadeNum) || idadeNum <= 0) {
      alert('Idade inválida.');
      return;
    }

    if (isNaN(nome) === false) {
      alert('Nome inválido.');
      return;
    }

    if (idadeNum <= 11) {
      alert(nome + ', você é uma criança. O que está fazendo na internet?');
    } else if (idadeNum >= 12 && idadeNum <= 20) {
      alert(nome + ', você é um adolescente. Tenha cuidado com o que faz na internet.');
    } else if (idadeNum >= 21 && idadeNum <= 65) {
      alert(nome + ', parabéns, você pode se considerar um adulto. Tenha cuidado com o que coloca na internet.');
    } else if (idadeNum >= 65) {
      alert(nome + ', você pode se considerar um velhinho. Cuide bem da sua saúde e aproveite bem o resto da sua vida.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>Nome:</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={(text) => setNome(text)}
          placeholder="Nome"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Idade:</Text>
        <TextInput
          style={styles.input}
          value={idade}
          onChangeText={(text) => setIdade(text)}
          placeholder="Idade"
          keyboardType="numeric"
        />
      </View>
      <Button title="Verificar" onPress={verificarIdade} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    marginLeft: 10,
    width: 150,
  },
});
