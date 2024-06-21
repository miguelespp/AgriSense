// details.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DetailScreen({ route, navigation }) {
  const { crop } = route.params;

  return (
    <View style={styles.container}>
      <Image source={crop.imageUrl} style={styles.image} />
      <Text style={styles.name}>{crop.name}</Text>
      <Text style={styles.ubicacion}>Ubicación: {crop.ubicacion}</Text>
      <Text style={styles.planta}>Planta: {crop.planta}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
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
