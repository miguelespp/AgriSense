import { Image, StyleSheet, TouchableOpacity, View, Text, FlatList } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { CropCard } from '@/components/CropCard';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useRoute } from '@react-navigation/native';

export interface Cultivo{
  id: string;
  name: string;
  ubicacion: string;
  planta: string;
  imageUrl: any;
}



export default function HomeScreen() {
  const route = useRoute();
  const { details } = route.params as { details: Cultivo };
  const cultivo = details;
  // console.log('cultivo', cultivo);

  const handlePress = (cultivo: Cultivo) => {
    // navigation.navigate('details');
  };
  return (
    <>
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47'}}
        headerImage={
          <Image
            source={cultivo.imageUrl}
            style={styles.reactLogo}
          />
        }>
        <Text style={styles.title}>Hola, Carlos 🥵</Text>
        <Text style={styles.name}>{cultivo.name}</Text>
        <Text style={styles.ubicacion}>Ubicación: {cultivo.ubicacion}</Text>
        <Text style={styles.planta}>Planta: {cultivo.planta}</Text>
      </ParallaxScrollView>
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  reactLogo: {
    height: 270,
    width: 420,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  ubicacion: {
    fontSize: 18,
    marginBottom: 8,
  },
  planta: {
    fontSize: 18,
  },
});
