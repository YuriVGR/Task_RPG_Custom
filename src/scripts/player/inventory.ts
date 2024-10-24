import { InventoryItem } from "../../interfaces";
import { 
    potions,
    weaponEquipType,
    defenseEquipType
    } from "../../interfaces";

let inventory: InventoryItem[] = [
    {id: 1, name: 'Poçao de cura', quantity: 1},
    {id: 2, name: 'Poçao de mana', quantity: 5},
    {id: 3, name: 'Espada de madeira', quantity: 1},
    {id: 4, name: 'Espada de ferro', quantity: 1},
    {id: 5, name: 'Espada de Ferro', quantity: 1},
    {id: 6, name: 'Espada de Cristal', quantity: 1},
    {id: 7, name: 'Espada Última', quantity: 1},
];

export default function Deletedinv(){
    function deleteItemById(itemId: number): void{
        const itemIndex = inventory.findIndex(item => item.id === itemId)
        if (itemIndex !== -1) {
            inventory.splice(itemIndex, 1);
            console.log(`Item com ID ${itemId} foi deletado`);
        } else {
            console.log(`Item com ID ${itemId} não encontrado`);
        }
    }
    deleteItemById(2);
    console.log(inventory); 
}