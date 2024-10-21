import { MenuItem } from "../interfaces";
import { weaponShop, armorShop, potionShop } from "../data/shop";

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

function buyWeapon(id: number) {
  const weapon = weaponShop.find((w) => w.id === id);
  if (weapon) {
  } else {
    console.log(`Potion with ID "${id}" not found`);
  }
}

function buyArmor(id: number) {
  const armor = weaponShop.find((a) => a.id === id);
  if (armor) {
  } else {
    console.log(`Potion with ID "${id}" not found`);
  }
}

function buyPotion(id: number) {
  const potion = potionShop.find((p) => p.id === id);
  if (potion) {
  } else {
    console.log(`Potion with ID "${id}" not found`);
  }
}
