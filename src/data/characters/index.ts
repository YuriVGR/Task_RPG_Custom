import { charType, mainCharType } from "../../interfaces";

const enemies: charType[] = [];

const allies: mainCharType[] = [];

let player: mainCharType = {
  name: "",
  health: 10,
  mana: 15,
  atk: 5,
  critChance: 0,
  level: 0,
  exp: 0,
};
