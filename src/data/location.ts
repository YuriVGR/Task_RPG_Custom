import { locationType } from "../interfaces";
import { goBuy } from "./shop";

export const location: locationType[] = [
  {
    id: 1,
    name: "Cidade",
    menu: [
      { label: "Explorar", action: goExplore, text: "" },
      { label: "Comprar", action: goBuy, text: "" },
      { label: "Viajar", action: goTravel, text: "" },
    ],
  },
  {
    id: 2,
    name: "Vila",
    menu: [
      { label: "Explorar", action: goExplore, text: "" },
      { label: "Comprar", action: goBuy, text: "" },
      { label: "Viajar", action: goTravel, text: "" },
    ],
  },
  {
    id: 3,
    name: "Floresta",
    menu: [
      { label: "Caçar", action: goExplore, text: "" },
      { label: "Explorar", action: goBuy, text: "" },
      { label: "Viajar", action: goTravel, text: "" },
    ],
  },
  {
    id: 4,
    name: "Dungeon",
    menu: [
      { label: "Caçar", action: goExplore, text: "" },
      { label: "Explorar", action: goBuy, text: "" },
      { label: "Viajar", action: goTravel, text: "" },
    ],
  },
];

const travel = [
  { name: "Cidade", action: goCity },
  { name: "Vila", action: goVillage },
  { name: "Floresta", action: goForest },
  { name: "Dungeon", action: goDungeon },
];

function goTravel() {}

function goExplore() {}

function goCity() {}
function goVillage() {}
function goForest() {}
function goDungeon() {}
