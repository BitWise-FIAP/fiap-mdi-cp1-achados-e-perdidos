import { Stack } from 'expo-router';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RootLayout() {
  useEffect(() => {
    const limparItens = async () => {
      try {
        await AsyncStorage.removeItem('itens');
        console.log('Itens cadastrados foram apagados ao abrir o app.');
      } catch (error) {
        console.log('Erro ao limpar itens:', error);
      }
    };

    limparItens();
  }, []);
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="suporte" options={{ title: 'Suporte' }} />
    </Stack>
  );
}