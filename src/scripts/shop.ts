import { MenuItem } from "../interfaces";
import { weaponShop, armorShop, potionShop } from "../data/shop";

export function buyWeapon(id: number) {
  const weapon = weaponShop.find((w) => w.id === id);
  if (weapon) {
  } else {
    console.log(`Potion with ID "${id}" not found`);
  }
}

export function buyArmor(id: number) {
  const armor = weaponShop.find((a) => a.id === id);
  if (armor) {
  } else {
    console.log(`Potion with ID "${id}" not found`);
  }
}

export function buyPotion(id: number) {
  const potion = potionShop.find((p) => p.id === id);
  if (potion) {
  } else {
    console.log(`Potion with ID "${id}" not found`);
  }
}

export function goArmorShop() {}
export function goWeaponShop() {}
export function goPotionShop() {}