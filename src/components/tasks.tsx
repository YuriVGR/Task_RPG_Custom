import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Task } from "../interfaces";

export default function TaskComponent({ title, description, status }: Task) {
  const currentStatus = (status: number) => {
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

  const currentColor = (status: number) => {
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
    <View style={styles.taskContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.middle}>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerL}>
          <FontAwesome6
            name="circle-exclamation"
            size={20}
            color={currentColor(status)}
          />
          <Text>{currentStatus(status)}</Text>
        </View>
        <View style={styles.footerR}>
          <TouchableOpacity>
            <FontAwesome6
              name="trash-bin"
              size={20}
              color={currentColor(status)}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome6
              name="pen-to-square"
              size={20}
              color={currentColor(status)}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Containers
  taskContainer: {},
  header: {},
  middle: {},
  footer: { flexDirection: "row" },

  // Text
  title: {},
  description: {},

  // Footer Areas
  footerL: { flexDirection: "row" },
  footerR: { flexDirection: "row" },
});
