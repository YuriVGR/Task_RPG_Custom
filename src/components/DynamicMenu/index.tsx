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

  const handleBack = () => {
    if (previousMenus.length > 0) {
      const previous = previousMenus[previousMenus.length - 1];

      setCurrentMenu(previous.menu);

      setMenuTitle(previous.title);

      setPreviousMenus((prev) => prev.slice(0, -1));

      onMenuChange?.(previous.menu, previous.title);

      if (menuRef.current.some((loc) => loc.name === previous.title)) {
        onLocationChange?.(previous.title);
      }
    }
  };

  const handleMenuPress = (menuItem: MenuItemProps) => {
    menuItem.action();
    onTextChange?.(menuItem.text);
  };

  return (
    <View className="flex w-full flex-col items-center justify-center">
      <Text>{menuTitle}</Text>

      {currentMenu.map((menuItem, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleMenuPress(menuItem)}
          className="w-3/4 h-12 flex items-center justify-center bg-blue-200"
        >
          <Text className="text-center text-lg font-bold">
            {menuItem.label}
          </Text>
        </TouchableOpacity>
      ))}

      {previousMenus.length > 0 && (
        <TouchableOpacity onPress={handleBack}>
          <Text>Voltar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
