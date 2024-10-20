import { locationType } from "../../interfaces";

const locations: locationType[] = [
  { name: "Cidade", menu: [] },
  { name: "Vila", menu: [] },
  { name: "Floresta", menu: [] },
  { name: "Dungeon", menu: [] },
];

const shop = [
  { name: "Loja de equipamentos", menu: [{}] },
  { name: "Loja de poções", menu: [] },
  { name: "Loja de magias", menu: [] },
];

const travel = [
  { name: "Cidade", action: goCity },
  { name: "Vila", action: goVillage },
  { name: "Floresta", action: goForest },
  { name: "Dungeon", action: goDungeon },
];

function goTravel() {}

function goCity() {}
function goVillage() {}
function goForest() {}
function goDungeon() {}
