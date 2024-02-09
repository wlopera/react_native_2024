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

export const getRandomDecimal = (min, max) => {
  return Math.random() * max + min;
};

export const getRandomMinMax = (min, max) => {
  return Math.floor(Math.random() * max) + min;
};

export const sleepTime = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const step = getRandomMinMax(0,3)
      resolve(step === 0 ? "0.00" : getRandomDecimal(0, 10000).toFixed(2));
    }, Math.round(getRandomMinMax(1000, 5000)));
  });
};
