import { mainCharType } from "../interfaces";

export let playerName: string = "";

export let player: mainCharType = {
  name: playerName,
  health: 10,
  mana: 15,
  atk: 5,
  critChance: 0,
  level: 0,
  exp: 0,
};

export const playerStatsVisual = [
  { label: "Nome", value: player.name },
  { label: "HP", value: player.health },
  { label: "MP", value: player.mana },
  { label: "Attack", value: player.atk },
  { label: "Chance Critica", value: player.critChance },
  { label: "Nivel", value: player.level },
  { label: "Exp", value: player.exp },
];
