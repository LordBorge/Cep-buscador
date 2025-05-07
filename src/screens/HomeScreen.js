import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { buscarEndereco } from '../services/api';
import AddressDisplay from '../components/AddressDisplay';

export default function HomeScreen() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);

  const handleBuscar = async () => {
    if (cep.length !== 8) {
      Alert.alert("CEP inválido", "Digite um CEP com 8 números.");
      return;
    }

    const resultado = await buscarEndereco(cep);
    setEndereco(resultado);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite o CEP (ex: 01001000)"
        style={styles.input}
        keyboardType="numeric"
        maxLength={8}
        value={cep}
        onChangeText={setCep}
      />
      <Button title="Buscar Endereço" onPress={handleBuscar} />
      <AddressDisplay endereco={endereco} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 40 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
});
