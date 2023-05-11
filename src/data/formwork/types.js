//import images from assets
import {
  wall,
  column,
  guided,
  safeScreen,
  climbingScaffolding,
} from "../../assets/formwork/formwork.js";

export const formworkTypes = [
  {
    name: "WALL FORMWORK",
    param: "wall-formwork",
    desc: "Used for casting walls, support walls pillars, earth retaining walls, and other vertical type castings",
    img: wall,
  },
  {
    name: "COLUMN FORMWORK",
    param: "column-formwork",
    desc: "Allows quick assembly and erection on site",
    img: column,
  },
  {
    name: "GUIDED CLIMBING SYSTEM",
    param: "guided-climbing-system",
    desc: "Usually used for walls in high-risr construction",
    img: guided,
  },
  {
    name: "SLAB FORMWORK",
    param: "slab-formwork",
    desc: "Allows concrete to be poured and susp...",
    img: "https://www.interfama.com/gmbh/wp-content/uploads/2020/11/AUSTERN-Menu.jpg",
  },
];

export const scaffoldingType = [
  {
    name: "SAFE SCREEN",
    param: "safe-screen",
    desc: "something to say about safe screen",
    img: safeScreen,
  },
  {
    name: "CLIMBING SCAFFOLDING",
    param: "climbing-scaffolding",
    desc: "Allows quick assembly and erection on site",
    img: climbingScaffolding,
  },
  // {
  //   name: "GUIDED CLIMBING SCREEN",
  // param: "",
  //   desc: "Usually used for walls in high-risr construction",
  //   img: "https://www.interfama.com/gmbh/wp-content/uploads/2020/11/MRM.jpg",
  // },
  // {
  //   name: "AUTOMATIC CLIMBING SYSTEM",
  // param: "",
  //   desc: "Allows concrete to be poured and susp...",
  //   img: "https://www.interfama.com/gmbh/wp-content/uploads/2020/11/AUSTERN-Menu.jpg",
  // },
];
