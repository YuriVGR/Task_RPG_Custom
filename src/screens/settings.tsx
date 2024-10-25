import { View, TouchableOpacity, Text } from "react-native";
import { clearAll } from "../scripts/task";

export default function SettingScreen() {
  return (
    <View>
      <TouchableOpacity onPress={() => clearAll()}><Text>LIMPAR</Text></TouchableOpacity>
    </View>
  );
}
