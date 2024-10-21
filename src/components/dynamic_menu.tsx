import React, { useState } from "react";
import { location } from "../data/location";
import { View, TouchableOpacity, Text } from "react-native";

export default function DynamicMenu() {
  const [currentLocation, setCurrentLocation] = useState(location[0]);
  const [curretMenu, setCurrentMenu] = useState(currentLocation.menu);

  function handleTravel(newLocationId: number) {
    const newLocation = location.find((loc) => loc.id === newLocationId);
    if (newLocation) {
      setCurrentLocation(newLocation);
      setCurrentMenu(newLocation.menu);
      console.log(`Traveled to ${newLocation.name}`);
    }
  }

  return (
    <View>
      <Text>Dynamic Menu</Text>

      {/*Render*/}
      <View>
        {curretMenu.map((menuItem, index) => (
          <TouchableOpacity key={index} onPress={menuItem.action}>
            <Text>{menuItem.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
