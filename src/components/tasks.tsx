import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Task } from "../interfaces";

export default function TaskComponent({ title, description, status }: Task) {
  const currentStatus = ({ status }: Task) => {
    if (status === 1) {
      return "Pendente";
    }
    if (status === 2) {
      return "Concluído";
    }
    if (status === 3) {
      return "Cancelado";
    }

    return "Desconhecido";
  };

  const currentColor = ({ status }: Task) => {
    if (status === 1) {
      return "#FFD700";
    }
    if (status === 2) {
      return "#4CAF50";
    }
    if (status === 3) {
      return "#FF4D4D";
    }
    return "#A9A9A9";
  };

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.middle}>
        <Text style={styles.description}></Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerL}>
          <FontAwesome6
            name="circle-exclamation"
            size={20}
            color={currentColor}
          />
        </View>
        <View style={styles.footerR}>
          <FontAwesome6 name="trash-bin" size={20} color={currentColor} />
          <FontAwesome6 name="pen-to-square" size={20} color={currentColor} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {},
  middle: {},
  footer: {},

  // Text
  title: {},
  description: {},

  // Footer Areas
  footerL: {},
  footerR: {},
});
