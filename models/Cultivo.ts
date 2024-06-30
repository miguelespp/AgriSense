export type Cultivo = {
    id: string;
    name: string;
    ubicacion: string;
    planta: string;
    imageUrl: any;
    temperature?: number;
    humidity?: number;
    luminity?: number;
    atm?: number;
}

export const presets = {
    Papa: require('@/assets/images/papa.jpg'),
    Maiz: require('@/assets/images/maiz.jpg'),
    Cebolla: require('@/assets/images/cebolla.jpg'),
    Ajo: require('@/assets/images/ajo.png'),
    Zanahoria: require('@/assets/images/zanahoria.jpg'),
}