import { weaponEquipType, defenseEquipType, potions } from "../interfaces";
import { MenuItem } from "../interfaces";

export const weaponShop: weaponEquipType[] = [
  { id: 1, name: "Wood Sword", dmg: 5, price: 10 },
  { id: 2, name: "Iron Sword", dmg: 15, price: 50 },
  { id: 3, name: "Crystal Sword", dmg: 25, price: 125 },
  { id: 4, name: "Ultima Sword", dmg: 55, price: 250 },
];

export const armorShop: defenseEquipType[] = [
  { id: 5, name: "Armadura de Couro", defense: 5, price: 10 },
  { id: 6, name: "Chainmail Vest", defense: 15, price: 50 },
  { id: 7, name: "Armadura de Mithril", defense: 25, price: 125 },
  { id: 8, name: "Warlord's Armor", defense: 55, price: 250 },
];

export const potionShop: potions[] = [
  { id: 9, name: "Health Potion", health: 10, price: 50 },
  { id: 10, name: "Mana Potion", mana: 10, price: 50 },
  { id: 11, name: "Ultima Potion", health: 10, mana: 10, price: 100 },
];

export function goArmorShop() {}
export function goWeaponShop() {}
export function goPotionShop() {}
