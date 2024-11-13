import { Image, StyleSheet, Platform, View, Text } from "react-native";
import { useState } from "react";
import DynamicMenu from "@/components/DynamicMenu";
import { SafeAreaView } from "react-native-safe-area-context";
import { MenuItemProps } from "@/types";

export default function RPGScreen() {
  const [currentMenu, setCurrentMenu] = useState<MenuItemProps[]>([]);
  const [menuTitle, setMenuTitle] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [currentText, setCurrentText] = useState("");

  return (
    <SafeAreaView>
      <View style={styles.placeholder} />
   

      {currentText && (
        <View>
          <Text>{currentText}</Text>
        </View>
      )}

      <DynamicMenu
        onMenuChange={(menu, title) => {
          setCurrentMenu(menu);
          setMenuTitle(title);
        }}
        onLocationChange={(location) => {
          setCurrentLocation(location);
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  placeholder: {
    width: 100,
    height: 100,
  },
});
