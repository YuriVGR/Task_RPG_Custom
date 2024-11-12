import { useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createLocationMenu } from "./locationMenu";
import { MenuItemProps, LocationProps } from "@/types";
import { shopMenu } from "./shopMenu";

export default function DynamicMenu() {
  const [currentMenu, setCurrentMenu] = useState<MenuItemProps[]>([]);
  const [menuTitle, setMenuTitle] = useState<string>("");
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
  };

  useState(() => {
    menuRef.current = createLocationMenu(isCurrentMenu);
    setCurrentMenu(menuRef.current[0].menu);
    setMenuTitle(menuRef.current[0].name);
  });

  return (
    <View>
      {currentMenu.map((menuItem, index) => (
        <TouchableOpacity key={index} onPress={menuItem.action}>
          <Text>{menuItem.label}</Text>
        </TouchableOpacity>
      ))}

      {previousMenus.length > 0 && (
        <TouchableOpacity>
          <Text>Voltar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
