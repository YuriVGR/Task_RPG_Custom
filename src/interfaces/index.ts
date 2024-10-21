//Equipments
export interface weaponEquipType {
  name: string;
  damage: number;
}

export interface defenseEquipType {
  name: string;
  defense: number;
}

export interface potions {
  name: string;
  mana: number;
  health: number;
}

// Characters
export interface charType {
  name: string;
  health: number;
  atk: number;
  critChance: number;
}

export interface mainCharType extends charType {
  exp: number;
  level: number;
  mana: number;
}

// Locations

export interface locationType {
  name: string;
  id: number;
  menu: { label: string; action: () => void; text: string }[];
}
