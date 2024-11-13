import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const STORAGE_KEY = "firstTime";
const TIMEOUT = 2250;

export default function WelcomeScreen() {
  const handleStart = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, "true");
      router.push("/(tabs)/");
    } catch (e) {
      console.error("Failed to save onboarding status:", e);
    }
  };

  return (
    <SafeAreaView className="bg-black w-full h-full justify-center ">
      <Image
        source={{
          uri: "https://example.com/path-to-rpg-background.jpg",
        }}
        className=""
      />
      <View className="flex flex-col gap-3 justify-center items-center px-3">
        <Text className="text-white text-center text-4xl font-bold">
          Bem-Vindo, Aventureiro!
        </Text>
        <Text className="text-white text-center">
          Complete suas tarefas para ganhar pontos de experiência e subir de
          nível!
        </Text>
        <Image
          source={{
            uri: "https://example.com/path-to-character-image.png",
          }}
          className=""
        />

        <TouchableOpacity
          className="bg-purple-500 py-4 rounded-full w-2/3 self-end"
          onPress={handleStart}
        >
          <Text className="text-white text-center text-lg font-medium">
            Começar
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
