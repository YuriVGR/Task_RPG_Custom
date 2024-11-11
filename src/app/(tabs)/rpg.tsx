import { Image, StyleSheet, Platform, View, Text } from "react-native";
import DynamicMenu from "@/components/DynamicMenu";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.placeholder} />
      <DynamicMenu />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  placeholder: {
    width: 100,
    height: 100,
  },
});
