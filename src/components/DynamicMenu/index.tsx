import { useRef, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { createLocationMenu } from "./data/locationMenu";
import { MenuItemProps, LocationProps, DynamicMenuProps } from "@/types";

export default function DynamicMenu({
  onMenuChange,
  onLocationChange,
  onTextChange,
}: DynamicMenuProps) {
  const [currentMenu, setCurrentMenu] = useState<MenuItemProps[]>([]);
  const [menuTitle, setMenuTitle] = useState("");
  const [previousMenus, setPreviousMenus] = useState<
    { menu: MenuItemProps[]; title: string }[]
  >([]);
  const menuRef = useRef<LocationProps[]>([]);

  const setCurrentMenuWithHistory = (menu: MenuItemProps[], title: string) => {
    setPreviousMenus((prev) => [
      ...prev,
      { menu: currentMenu, title: menuTitle },
    ]);
    setCurrentMenu(menu);
    setMenuTitle(title);

    onMenuChange?.(menu, title);

    if (menuRef.current.some((loc) => loc.name === title)) {
      onLocationChange?.(title);
    }
  };

  useEffect(() => {
    menuRef.current = createLocationMenu(setCurrentMenuWithHistory);
    setCurrentMenu(menuRef.current[0].menu);
    setMenuTitle(menuRef.current[0].name);
    onMenuChange?.(menuRef.current[0].menu, menuRef.current[0].name);
    onLocationChange?.(menuRef.current[0].name);
  }, []);

  const handleMenuPress = (menuItem: MenuItemProps) => {
    menuItem.action();
    onTextChange?.(menuItem.text);
  };

  return (
    <View className="flex w-full flex-col items-center justify-center gap-5">
      <Text className="text-4xl font-bold">{menuTitle}</Text>

      {currentMenu.map((menuItem, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleMenuPress(menuItem)}
          className="w-3/4 flex items-center justify-center bg-purple-500 py-4 rounded-full"
        >
          <Text className="text-center text-lg font-bold">
            {menuItem.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
