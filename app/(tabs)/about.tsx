import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

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
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Agrisense</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">¿Qué es Agrisense?</ThemedText>
        <ThemedText>
          Es una aplicacion que busca monitorear los cultivos de los agricultores peruanos. Con la finalidad de dar herramientas para ejercer un mayor control sobre la calidad de sus productos.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">¿Que diferencia nuestra aplicaciion?</ThemedText>
        <ThemedText>
          Agrisense ofrece una interfaz amigable y facil de usar, con la finalidad de que cualquier agricultor pueda usarla sin problemas. Conexion con los sensores del terreno para obtener datos y estadisticas en tiempo real.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">¿Quienes somos?</ThemedText>
        <ThemedText>
          Somos un grupo de estudiantes de la <ThemedText type='defaultSemiBold'> Universidad de Nacional Mayor de San Marcos</ThemedText> , que buscan mejorar la calidad de vida de los agricultores de la región.
        </ThemedText>
      </ThemedView>
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
