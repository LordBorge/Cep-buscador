// app/cep.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function BuscarCepScreen() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);

  const buscarEndereco = async () => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      setEndereco(data);
    } catch (error) {
      console.error('Erro ao buscar o CEP:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Buscar Endereço por CEP</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o CEP"
        value={cep}
        keyboardType="numeric"
        onChangeText={setCep}
      />
      <Button title="Buscar" onPress={buscarEndereco} />
      
      {endereco && (
        <View style={styles.resultado}>
          <Text>Logradouro: {endereco.logradouro}</Text>
          <Text>Bairro: {endereco.bairro}</Text>
          <Text>Cidade: {endereco.localidade}</Text>
          <Text>Estado: {endereco.uf}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 50 },
  titulo: { fontSize: 20, marginBottom: 10 },
  input: {
    height: 40, borderColor: 'gray', borderWidth: 1,
    marginBottom: 10, paddingHorizontal: 10,
  },
  resultado: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 10,
  }
});
