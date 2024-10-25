import { InventoryItem } from "../../interfaces";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { potions, weaponEquipType, defenseEquipType } from "../../interfaces";

const saveItem = async (inventory: InventoryItem[]) => {
  try {
    const jsonValue = JSON.stringify(inventory);
    await AsyncStorage.setItem("inventory", jsonValue);
  } catch (e) {
    console.log(e);
  }
};

const loadItem = async (): Promise<InventoryItem[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem("inventory");
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.log(e);
    return [];
  }
};
