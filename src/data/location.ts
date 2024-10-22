import { locationType } from "../interfaces";
import { goTravel, goExplore, goHunt } from "../scripts/travel";
import {
  weaponShopMenu,
  armorShopMenu,
  potionShopMenu,
  weaponShop,
} from "./shop";
import { goCity, goVillage, goForest, goDungeon } from "../scripts/travel";
import { goArmorShop, goWeaponShop, goPotionShop } from "../scripts/shop";

export const location: locationType[] = [
  {
    id: 1,
    name: "Cidade",
    menu: [
      { label: "Explorar", action: goExplore, text: "" },
      { label: "Loja de Armas", action: goWeaponShop, text: "" },
      { label: "Loja de Armaduras", action: goArmorShop, text: "" },
      { label: "Viajar", action: goTravel, text: "" },
    ],
  },
  {
    id: 2,
    name: "Vila",
    menu: [
      { label: "Explorar", action: goExplore, text: "" },
      { label: "Loja de Poções", action: goPotionShop, text: "" },
      { label: "Viajar", action: goTravel, text: "" },
    ],
  },
  {
    id: 3,
    name: "Floresta",
    menu: [
      { label: "Caçar", action: goHunt, text: "" },
      { label: "Explorar", action: goExplore, text: "" },
      { label: "Viajar", action: goTravel, text: "" },
    ],
  },
  {
    id: 4,
    name: "Dungeon",
    menu: [
      { label: "Caçar", action: goHunt, text: "" },
      { label: "Explorar", action: goExplore, text: "" },
      { label: "Viajar", action: goTravel, text: "" },
    ],
  },
  {
    id: 5,
    name: "Loja de Armas",
    menu: weaponShopMenu,
  },
  {
    id: 6,
    name: "Loja de Armaduras",
    menu: armorShopMenu,
  },
  {
    id: 7,
    name: "Loja de Poções",
    menu: potionShopMenu,
  },
];

export const travel = [
  { name: "Cidade", action: goCity },
  { name: "Vila", action: goVillage },
  { name: "Floresta", action: goForest },
  { name: "Dungeon", action: goDungeon },
];
