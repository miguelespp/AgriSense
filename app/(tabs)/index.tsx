import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Text, FlatList } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { CropCard } from '@/components/CropCard';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useNavigation } from 'expo-router';

export interface Cultivo{
  id: string;
  name: string;
  ubicacion: string;
  planta: string;
  imageUrl: any;
}

const data: Cultivo[] = [
  {id: '1', name: 'Terreno-F2', ubicacion: 'Huancayo', planta: 'Papa-Solanum tuberosum', imageUrl: require('@/assets/images/papa.jpg')},
  {id: '2', name: 'Zona-B2', ubicacion: 'Ancash', planta: 'Maiz-Zea mays', imageUrl: require('@/assets/images/maiz.jpg')},
  {id: '3', name: 'Zona-B1', ubicacion: 'Ancash', planta: 'Cebolla-Allium cepa', imageUrl: require('@/assets/images/cebolla.jpg')},
  {id: '4', name: 'Plantacion-L1', ubicacion: 'Lima', planta: 'Ajo-Allium sativum', imageUrl: require('@/assets/images/ajo.png')},
  {id: '5', name: 'Plantacion-L2', ubicacion: 'Lima', planta: 'Zanahoria-Daucus carota', imageUrl: require('@/assets/images/zanahoria.jpg')},

];



export default function HomeScreen() {

  const navigation = useNavigation();
  const colorScheme = useColorScheme();

  const handlePress = (crop: Cultivo) => {
    navigation.navigate('moreInfo', {cultivo : crop});
  };

  const headerBackgroundColor = colorScheme === 'dark' ? '#1D3D47' : '#A1CEDC';
  const textColor = colorScheme === 'dark' ? 'white' : 'black';

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47'}}
      headerImage={
        <Image
          source={require('@/assets/images/AgriSenseLogo.jpg')}
          style={styles.reactLogo}
        />
      }>
      <Text style={[styles.titleContainer, { color: textColor }]} >Hola, Carlos 🥵</Text>
      {
        data.map((crop) => (
          <TouchableOpacity style={styles.stepContainer} onPress={() => handlePress(crop)} key={crop.id}>
            <CropCard crop={crop} />
          </TouchableOpacity>
        ))
      }
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    color: 'light',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 270,
    width: 420,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  linkStyle: {
    flex: 1,
  },
    
});
