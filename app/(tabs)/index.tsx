import { Image, StyleSheet, TouchableOpacity, View, Text, FlatList } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { CropCard } from '@/components/CropCard';

export interface Cultivo{
  id: string;
  name: string;
  ubicacion: string;
  planta: string;
  imageUrl: string;
}

const data: Cultivo[] = [
  {id: '1', name: 'Terreno-F2', ubicacion: 'Huancayo', planta: 'Papa-Solanum tuberosum', imageUrl: './assets/images/papa.jpg'},
  {id: '2', name: 'Trujillo-B-2', ubicacion: 'Ancash', planta: 'Maiz-Zea mays', imageUrl: '@/assets/images/maiz.jpg'},
  {id: '3', name: 'Cebolla', ubicacion: 'Ancash', planta: 'Cebolla-Allium cepa', imageUrl: '@/assets/images/cebolla.jpg'},
  {id: '4', name: 'Ajo', ubicacion: 'Lima', planta: 'Ajo-Allium sativum', imageUrl: '@/assets/images/ajo.png'},
  {id: '5', name: 'Zanahoria', ubicacion: 'Lima', planta: 'Zanahoria-Daucus carota', imageUrl: '@/assets/images/zanahoria.jpg'},

];



export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/AgriSenseLogo.jpg')}
          style={styles.reactLogo}
        />
      }>
      <FlatList
      data={data}
      renderItem={({ item }) => <CropCard crop={item} />}
      keyExtractor={item => item.id}
    />
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
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
    
});
