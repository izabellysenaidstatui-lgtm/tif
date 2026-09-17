import React from 'react';
import { Alert } from 'react-native';
import BemVindo from './inicial';

export default function App() {
  return (
    <BemVindo
      onExplorar={() => {
        Alert.alert(
          'Lumora',
          'Abrindo estoque...'
        );
      }}

      onCadastrar={() => {
        Alert.alert(
          'Lumora',
          'Abrindo cadastro de produto...'
        );
      }}
    />
  );
}