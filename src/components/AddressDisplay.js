import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AddressDisplay = ({ endereco }) => {
  if (!endereco || endereco.erro) return null;

  return (
    <View style={styles.container}>
      <Text>Logradouro: {endereco.logradouro}</Text>
      <Text>Bairro: {endereco.bairro}</Text>
      <Text>Cidade: {endereco.localidade}</Text>
      <Text>Estado: {endereco.uf}</Text>
      <Text>CEP: {endereco.cep}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 10,
  },
});

export default AddressDisplay;
