import { weaponEquipType, defenseEquipType, potions } from "../interfaces";

const weapons: weaponEquipType[] = [];

const armor: defenseEquipType[] = [];

const potion: potions[] = [
  {
    name: "Health potion",
    health: 5,
    mana: 0,
  },
  {
    name: "Mana potion",
    health: 0,
    mana: 5,
  },
];

const shop = [
  { name: "Loja de equipamentos", menu: [{}] },
  { name: "Loja de poções", menu: [] },
  { name: "Loja de magias", menu: [] },
];

export function goBuy() {}
