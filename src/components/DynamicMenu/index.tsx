import { View, Text, TouchableOpacity } from "react-native";
import { locationMenu } from "./locationMenu";
import { shopMenu } from "./shopMenu";

export default function DynamicMenu() {
  const index: number = 0;
  const currentMenu = [...locationMenu[index].menu];

  return (
    <View>
      {currentMenu.map((menuItem, index) => (
        <TouchableOpacity key={index} onPress={menuItem.action}>
          <Text>{menuItem.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
