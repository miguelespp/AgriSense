import { useState } from "react";
import { Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import Geolocation from "@react-native-community/geolocation";
import * as Location from "expo-location";
import { View } from "react-native";


export const UseLocation = (onChange:any) => {
  const [location, setLocation] = useState(null);
  const [manualLocation, setManualLocation] = useState({
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const getLocationAsync = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission to access location was denied");
      return;
    }

    let location:any = await Location.getCurrentPositionAsync({});
    setLocation(location);
    onChange("location", location);
  };
  const handleSearchLocation = () => {
    getLocationAsync();
  };

  const handleManualLocationChange = (fieldName: string, value: string) => {
    setManualLocation((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  return (
    <>
      <TextInput
        placeholder="Ubicacion"
        value={manualLocation.zipCode}
        onChangeText={(text) => handleManualLocationChange("address", text)}
        style={styles.input}
      />
      <View style={styles.button}>
        <Button title="Search Location" onPress={handleSearchLocation} color={'red'} />
      </View>
      {location && (
          <Text >
          Latitude: {location.coords.latitude}, Longitude:{" "}
          {location.coords.longitude}
        </Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  

  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  reactLogo: {
    height: 270,
    width: 420,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  button: {
    backgroundColor: 'red',
    color: 'white',
    padding: 10,
    borderRadius: 5,
  }
});
