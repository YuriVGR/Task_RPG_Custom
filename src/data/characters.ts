import { charType, mainCharType } from "../interfaces";

const enemies: charType[] = [
  { name: "Slime", health: 7, atk: 2, critChance: 0 },
  { name: "Goblin", health: 15, atk: 5, critChance: 2 },
  { name: "Gnoll", health: 15, atk: 10, critChance: 7.5 },
  { name: "Orc", health: 50, atk: 15, critChance: 5 },
  { name: "Lich", health: 35, atk: 30, critChance: 0 },
];

const enemieBosses: charType[] = [
  { name: "Slime King", health: 50, atk: 8, critChance: 5 },
  { name: "Goblin Chief", health: 60, atk: 15, critChance: 10 },
  { name: "Gnoll Warlord", health: 80, atk: 25, critChance: 15 },
  { name: "Orc Warchief", health: 150, atk: 35, critChance: 10 },
  { name: "Lich King", health: 120, atk: 50, critChance: 5 },
];

const allies: mainCharType[] = [
  {
    name: "Archer",
    health: 7.5,
    mana: 0,
    atk: 7.5,
    critChance: 12.5,
    level: 0,
    exp: 0,
  },
  {
    name: "Mage",
    health: 7.5,
    mana: 35,
    atk: 15,
    critChance: 0,
    level: 0,
    exp: 0,
  },
  {
    name: "Fighter",
    health: 20,
    mana: 0,
    atk: 6,
    critChance: 2.5,
    level: 0,
    exp: 0,
  },
  {
    name: "Cleric",
    health: 20,
    mana: 35,
    atk: 1,
    critChance: 22.5,
    level: 0,
    exp: 0,
  },
];
