import Main from "../screens/Main";
import ListExample from "../screens/ListExample";
import TextInputExample from "../screens/TextInputExample";
import ScrollViewExample from "../screens/ScrollViewExample";
import ImageExample from "../screens/ImageExample";
import PickerExample from "../screens/PickerExample";
import CleanerScreen from "../screens/CleanerScreen";

export const drawerScreenList = [
  {
    id: 1,
    name: "Principal",
    component: Main,
    label: "Principal",
    iconName: "home",
  },
  {
    id: 2,
    name: "Listado",
    component: ListExample,
    label: "Lista",
    iconName: "list-outline",
  },
  {
    id: 3,
    name: "Entrada de Textos",
    component: TextInputExample,
    label: "Textos",
    iconName: "document-text-outline",
  },
  {
    id: 4,
    name: "Desplazar Listado",
    component: ScrollViewExample,
    label: "Mover Vertical",
    iconName: "receipt-outline",
  },
  {
    id: 5,
    name: "Imagen",
    component: ImageExample,
    label: "Imagen",
    iconName: "image-outline",
  },
  {
    id: 6,
    name: "Picker",
    component: PickerExample,
    label: "Picker",
    iconName: "film-outline",
  },
  {
    id: 7,
    name: "Limpiador",
    component: CleanerScreen,
    label: "Limpiador",
    iconName: "film-outline",
  },
];
