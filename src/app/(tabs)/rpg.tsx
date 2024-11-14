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
    <SafeAreaView className="flex flex-col items-center justify-center h-full">
      <View className="bg-red-500 size-72 rounded-xl"/>
   

      {currentText && (
        <View>
          <Text className="text-black text-2xl font-bold">{currentText}</Text>
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
