//Equipments
export interface weaponEquipType {
  id: number;
  name: string;
  dmg: number;
  price: number;
}

export interface defenseEquipType {
  id: number;
  name: string;
  defense: number;
  price: number;
}

export interface potions {
  id: number;
  name: string;
  mana?: number;
  health?: number;
  price: number;
}

export interface MenuItem {
  id: number;
  label: string;
  action: () => void;
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
  menu: {
    label: string;
    action?: () => void;
    subMenu?: MenuItem[];
    text: string;
  }[];
}

// Player
interface InventoryItem {
  id: number;
  name: string;
  quantity: number
}
