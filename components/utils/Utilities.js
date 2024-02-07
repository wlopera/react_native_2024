export const dataList = [
  {
    id: 0,
    name: "William Jr",
  },
  {
    id: 1,
    name: "Camila",
  },
  {
    id: 2,
    name: "Andrés",
  },
  {
    id: 3,
    name: "Daniel",
  },
  {
    id: 4,
    name: "Carlos",
  },
];

export const dataToScroll = [
  {
    id: 0,
    name: "William Jr",
  },
  {
    id: 1,
    name: "Camila",
  },
  {
    id: 2,
    name: "Andrés",
  },
  {
    id: 3,
    name: "Daniel",
  },
  {
    id: 4,
    name: "Carlos",
  },
  {
    id: 5,
    name: "Consuelo",
  },
  {
    id: 6,
    name: "Carolina",
  },
  {
    id: 7,
    name: "Chepe",
  },
  {
    id: 8,
    name: "Jorge",
  },
  {
    id: 9,
    name: "Valentin",
  },
  {
    id: 10,
    name: "Zulay",
  },
];

export const players = [
  {
    label: "lmessi",
    value: "Leonel Messi",
  },
  {
    label: "cr7",
    value: "Cristiano Ronaldo",
  },
  {
    label: "ney",
    value: "Neymar Jr",
  },
  {
    label: "suarez",
    value: "Luis Suarez",
  },
  {
    label: "kilian",
    value: "Kilian Embappe",
  },
  {
    label: "juan",
    value: "Juan Arango",
  },
];

export const getPlayerInit = () => {
  return Math.floor(Math.random() * players.length);
};
