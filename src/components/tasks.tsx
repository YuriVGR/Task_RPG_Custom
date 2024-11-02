import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Task } from "../interfaces";

export default function Task() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}></Text>
      </View>
      <View style={styles.middle}>
        <Text style={styles.description}></Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerL}></View>
        <View style={styles.footerL}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {},
  title: {},
  middle: {},
  description: {},
  footer: {},
  footerL: {},
  footerR: {},
});
