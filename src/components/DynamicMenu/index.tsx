import { useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createLocationMenu } from "./locationMenu";
import { MenuItemProps, LocationProps, DynamicMenuProps } from "@/types";

export default function DynamicMenu({
  onMenuChange,
  onLocationChange,
}: DynamicMenuProps) {
  const [currentMenu, setCurrentMenu] = useState<MenuItemProps[]>([]);
  const [menuTitle, setMenuTitle] = useState("");
  const [previousMenus, setPreviousMenus] = useState<
    { menu: MenuItemProps[]; title: string }[]
  >([]);
  const menuRef = useRef<LocationProps[]>([]);

  const isCurrentMenu = (menu: MenuItemProps[], title: string) => {
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

  return (
    <View>
      {currentMenu.map((menuItem, index) => (
        <TouchableOpacity key={index} onPress={menuItem.action}>
          <Text>{menuItem.label}</Text>
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
