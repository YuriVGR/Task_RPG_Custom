import { locationType } from "../interfaces";
import { goArmorShop, goWeaponShop, goPotionShop } from "./shop";
import { goTravel, goExplore, goHunt } from "../scripts/travel";
import { goCity, goVillage, goForest, goDungeon } from "../scripts/travel";

export const location: locationType[] = [
  {
    id: 1,
    name: "Cidade",
    menu: [
      { label: "Explorar", action: goExplore, text: "" },
      { label: "Loja de Armas", action: goWeaponShop, text: "" },
      { label: "Loja de Armaduras", action: goArmorShop, text: "" },
      { label: "Travel", action: goTravel, text: "" },
    ],
  },
  {
    id: 2,
    name: "Vila",
    menu: [
      { label: "Explorar", action: goExplore, text: "" },
      { label: "Loja de Poções", action: goPotionShop, text: "" },
      { label: "Travel", action: goTravel, text: "" },
    ],
  },
  {
    id: 3,
    name: "Floresta",
    menu: [
      { label: "Caçar", action: goHunt, text: "" },
      { label: "Explorar", action: goExplore, text: "" },
      { label: "Travel", action: goTravel, text: "" },
    ],
  },
  {
    id: 4,
    name: "Dungeon",
    menu: [
      { label: "Caçar", action: goHunt, text: "" },
      { label: "Explorar", action: goExplore, text: "" },
      { label: "Travel", action: goTravel, text: "" },
    ],
  },
];

export const travel = [
  { name: "Cidade", action: goCity },
  { name: "Vila", action: goVillage },
  { name: "Floresta", action: goForest },
  { name: "Dungeon", action: goDungeon },
];
