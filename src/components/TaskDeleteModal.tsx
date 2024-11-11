import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Modal } from "react-native";
import { TaskDeleteModalProps } from "@/types";

export default function TaskDeleteModal({
  isVisible,
  onClose,
  onDelete,
}: TaskDeleteModalProps) {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>Tem certeza que deseja excluir esta tarefa?</Text>
          <View style={styles.buttonContainer}>
            <Button title="Deletar" onPress={handleDelete} />
            <Button title="Cancelar" onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});
