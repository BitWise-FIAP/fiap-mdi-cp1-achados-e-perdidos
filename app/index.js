import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import CardPerdido from '../components/CardPerdido';
import CardHome from '../components/CardHome';

export default function Home() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <CardPerdido></CardPerdido>
       <View style={styles.actions}>
        <CardHome
          icon="cube-outline"
          title="Cadastrar item encontrado"
          onPress={() => router.push('/cadastrar')}
        />

        <CardHome
          icon="eye-outline"
          title="Ver todos os itens"
          onPress={() => router.push('/itens')}
        />

        <CardHome
          icon="chatbubble-outline"
          title="Falar com suporte"
          onPress={() => router.push('/suporte')}
        />
      </View>

      <Text style={styles.titulo}>🏠 Home</Text>
      <TouchableOpacity style={styles.botao} onPress={() => router.push('/sobre')}>
        <Text style={styles.botaoTexto}>Ir para Sobre</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5', gap: 50 },
  titulo:    { fontSize: 32, fontWeight: 'bold', marginBottom: 24 },
  botao:     { backgroundColor: '#E83D84', padding: 16, borderRadius: 12 },
  botaoTexto:{ color: '#fff', fontSize: 16, fontWeight: '600' },
});