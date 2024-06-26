import { create } from "zustand";
import { Cultivo } from "@/models/Cultivo";

type CultivosState = {
  data: Cultivo[];
  setData: (data: Cultivo[]) => void;
  añadirCultivo: (cultivo: Cultivo) => void;
};

const useCultivos = create<CultivosState>((set, get) => ({
  data: [
    {
      id: "1",
      name: "Terreno-F2",
      ubicacion: "Huancayo",
      planta: "Papa-Solanum tuberosum",
      imageUrl: require("@/assets/images/papa.jpg"),
      temperature: 20,
      humidity: 80,
      luminity: 50,
      atm: 1000,
    },
    {
      id: "2",
      name: "Zona-B2",
      ubicacion: "Ancash",
      planta: "Maiz-Zea mays",
      imageUrl: require("@/assets/images/maiz.jpg"),
      temperature: 25,
      humidity: 70,
      luminity: 60,
      atm: 879,
    },
    {
      id: "3",
      name: "Zona-B1",
      ubicacion: "Ancash",
      planta: "Cebolla-Allium cepa",
      imageUrl: require("@/assets/images/cebolla.jpg"),
      temperature: 22,
      humidity: 75,
      luminity: 55,
      atm: 900,
    },
    {
      id: "4",
      name: "Plantacion-L1",
      ubicacion: "Lima",
      planta: "Ajo-Allium sativum",
      imageUrl: require("@/assets/images/ajo.png"),
      temperature: 23,
      humidity: 70,
      luminity: 60,
      atm: 890,
    },
    {
      id: "5",
      name: "Plantacion-L2",
      ubicacion: "Lima",
      planta: "Zanahoria-Daucus carota",
      imageUrl: require("@/assets/images/zanahoria.jpg"),
      temperature: 24,
      humidity: 75,
      luminity: 55,
      atm: 900,
    },
  ],
  setData: (data) => set({ data }),
  añadirCultivo: (cultivo) => {
    const state = get();
    state.data.push(cultivo);
    set(state);
  },
}));

export default useCultivos;
