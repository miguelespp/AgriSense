import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, Button } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import RNPickerSelect from "react-native-picker-select";
import { UseLocation } from "@/components/UseLocation";
import { Cultivo } from ".";

export default function HomeScreen() {
  const [formData, setFormData] = useState({
    name: "",
    ubicacion: "",
  });
  const [selectedItem, setSelectedItem] = useState([]);

  const items = [
    { label: "Papa-Solanum tuberosum", value: "Papa" },
    { label: "Maiz-Zea mays", value: "Maiz" },
    { label: "Cebolla-Allium cepa", value: "Cebolla" },
    { label: "Ajo-Allium sativum", value: "Ajo" },
    { label: "Zanahoria-Daucus carota", value: "Zanahoria" },
  ];

  const handleChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log("Formulario enviado", formData);
    // Aquí puedes agregar lógica para enviar el formulario
  };
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/AgriSenseLogo.jpg")}
          style={styles.reactLogo}
        />
      }
    >
      <Text style={styles.title}>Registra un cultivo</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={formData.name}
        onChangeText={(text) => handleChange("name", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Ubicacion"
        value={formData.ubicacion}
        onChangeText={(text) => handleChange("email", text)}
      />
      <RNPickerSelect
        onValueChange={(value) => setSelectedItem(value)}
        items={items}
        placeholder={{ label: "Seleccionar ítem...", value: null }}
        style={pickerSelectStyles}
      />
      <UseLocation/>


      <Button title="Enviar" onPress={handleSubmit} />
    </ParallaxScrollView>
  );
}

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
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    height: 50,
    marginBottom: 10,
    padding: 10,
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  placeholder: {
    color: "gray",
  },
});
