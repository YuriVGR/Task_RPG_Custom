import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Task } from "../interfaces";

interface TaskComponentProps extends Task {
  removeTask: (taskId: string) => void;
}

export default function TaskComponent({ id, title, description, status, removeTask }: TaskComponentProps) {
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
      return "#E6B800"; // Darker yellow
    }
    if (status === 2) {
      return "#4CAF50"; // Green
    }
    if (status === 3) {
      return "#FF4D4D"; // Red
    }
    return "#A9A9A9"; // Gray for unknown
  };

  const currentBGColor = (status: number) => {
    if (status === 1) {
      return "#FFF9B0"; // Lighter yellow background
    }
    if (status === 2) {
      return "#A5D6A7"; // Lighter green background
    }
    if (status === 3) {
      return "#FFB3B3"; // Lighter red background
    }
    return "#D3D3D3"; // Gray for unknown
  };


  return (
    <View>
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
          <Text style={{ color: currentColor(status), fontWeight: "bold" }}>
            {currentStatus(status)}
          </Text>
        </View>
        <View style={styles.footerR}>
          <TouchableOpacity onPress={() => removeTask(id)}>
            <FontAwesome6
              name="trash-can"
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
  header: {},
  title: {},
  middle: {},
  description: {},
  footer: {},
  footerL: {},
  footerR: {},
});
