import { charType, mainCharType } from "../interfaces";

export const enemies: charType[] = [
  { name: "Slime", health: 7, atk: 2, critChance: 0 },
  { name: "Goblin", health: 15, atk: 5, critChance: 2 },
  { name: "Gnoll", health: 15, atk: 10, critChance: 7.5 },
  { name: "Ogro", health: 50, atk: 15, critChance: 5 },
  { name: "Lich", health: 35, atk: 30, critChance: 0 },
];

export const enemieBosses: charType[] = [
  { name: "Rei Slime", health: 50, atk: 8, critChance: 5 },
  { name: "Chefe dos Goblins", health: 60, atk: 15, critChance: 10 },
  { name: "Gnoll Titã", health: 80, atk: 25, critChance: 15 },
  { name: "Ogro Mestre de Guerra", health: 150, atk: 35, critChance: 10 },
  { name: "Lich Ancestral", health: 120, atk: 50, critChance: 5 },
];

export const allies: mainCharType[] = [
  {
    name: "Arqueiro",
    health: 7.5,
    mana: 0,
    atk: 7.5,
    critChance: 12.5,
    level: 0,
    exp: 0,
  },
  {
    name: "Maga",
    health: 7.5,
    mana: 35,
    atk: 15,
    critChance: 0,
    level: 0,
    exp: 0,
  },
  {
    name: "Lutador",
    health: 20,
    mana: 0,
    atk: 6,
    critChance: 2.5,
    level: 0,
    exp: 0,
  },
  {
    name: "Clérica",
    health: 20,
    mana: 35,
    atk: 1,
    critChance: 22.5,
    level: 0,
    exp: 0,
  },
];
