import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useState, useEffect } from 'react';

import itensData from '../storage/itens.json';

export default function Sobre() {
  const router = useRouter();
  const [itens, setItens] = useState([]);

  useEffect(() => {
    setItens(itensData);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>ℹ️ Sobre</Text>
      <Text style={styles.descricao}>Esse app foi feito na FIAP! 🚀</Text>

      <ScrollView style={{ width: '100%' }}>
        {itens.map(item => (
          <View key={item.id} style={styles.card}>

          <Image 
            source={{ uri: item.imagem }}
            style={{ width: '100%', height: 150, backgroundColor: '#ccc' }}
            resizeMode="cover"
            onError={(e) => console.log('ERRO IMG:', item.imagem)}
          />

            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.desc}>{item.descricao}</Text>
            <Text style={styles.local}>📍 {item.local_perdido}</Text>
            <Text style={styles.data}>📅 {item.data}</Text>

          </View>
        ))}
      </ScrollView>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.voltar}>← Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:  { flex: 1, backgroundColor: '#fff', padding: 16 },
  titulo:     { fontSize: 28, fontWeight: 'bold', marginBottom: 12, textAlign: 'center' },
  descricao:  { fontSize: 16, color: '#555', marginBottom: 16, textAlign: 'center' },

  card: {
    backgroundColor: '#f2f2f2',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12
  },

  imagem: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 8
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  desc: {
    fontSize: 14,
    color: '#444',
    marginVertical: 4
  },

  local: {
    fontSize: 14,
    color: '#666'
  },

  data: {
    fontSize: 13,
    color: '#888'
  },

  voltar: { 
    fontSize: 16, 
    color: '#E83D84', 
    fontWeight: '600', 
    textAlign: 'center',
    marginTop: 10
  },
});