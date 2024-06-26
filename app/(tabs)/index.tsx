import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Text, FlatList } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { CropCard } from '@/components/CropCard';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useNavigation } from 'expo-router';
import { NavigationProp } from '@react-navigation/native';
import { Cultivo } from '@/models/Cultivo';
import useCultivos from '@/hooks/useData';

type ParamList = {
  details: {
    details: Cultivo;
  }
}




export default function HomeScreen() {

  const { data } = useCultivos();

  const navigation = useNavigation<NavigationProp<ParamList>>();
  const colorScheme = useColorScheme();

  const handlePress = (crop: Cultivo) => {
    // console.log('crop', crop);
    navigation.navigate(`details`, {details: crop});
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
