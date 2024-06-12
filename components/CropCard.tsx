import { Image, StyleSheet, TouchableOpacity, View, Text, FlatList } from 'react-native';


export const CropCard =  ({ crop }:any) => (
    <View style={styles.card}>
      <Text style={styles.title}>{crop.name}</Text>
      <Text style={styles.description}>{crop.planta}</Text>
      <Image source={crop.imageUrl} style={styles.image} />
    </View>
  );

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 20,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderWidth: 1,
        borderColor: '#ddd',
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      description: {
        fontSize: 16,
        marginBottom: 10,
      },
      image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
      },
});