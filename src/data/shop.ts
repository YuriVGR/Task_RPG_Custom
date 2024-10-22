import { weaponEquipType, defenseEquipType, potions, MenuItem } from "../interfaces";
import { buyWeapon, buyArmor, buyPotion } from "../scripts/shop";

export const weaponShop: weaponEquipType[] = [
  { id: 1, name: "Espada de Madeira", dmg: 5, price: 10 },
  { id: 2, name: "Espada de Ferro", dmg: 15, price: 50 },
  { id: 3, name: "Espada de Cristal", dmg: 25, price: 125 },
  { id: 4, name: "Espada Última", dmg: 55, price: 250 },
];

export const armorShop: defenseEquipType[] = [
  { id: 5, name: "Armadura de Couro", defense: 5, price: 10 },
  { id: 6, name: "Chainmail Vest", defense: 15, price: 50 },
  { id: 7, name: "Armadura de Mithril", defense: 25, price: 125 },
  { id: 8, name: "Armadura Última", defense: 55, price: 250 },
];

export const potionShop: potions[] = [
  { id: 9, name: "Poção de HP", health: 10, price: 50 },
  { id: 10, name: "Poção de MP", mana: 10, price: 50 },
  { id: 11, name: "Poção Última", health: 10, mana: 10, price: 100 },
];

export const weaponShopMenu: MenuItem[] = weaponShop.map((weapon) => ({
  id: weapon.id,
  label: weapon.name,
  action: () => buyWeapon(weapon.id),
}));

export const armorShopMenu: MenuItem[] = armorShop.map((armor) => ({
  id: armor.id,
  label: armor.name,
  action: () => buyArmor(armor.id),
}));

export const potionShopMenu: MenuItem[] = potionShop.map((potion) => ({
  id: potion.id,
  label: potion.name,
  action: () => buyPotion(potion.id),
}));
