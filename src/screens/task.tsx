import { useState } from "react";
import { View, TouchableOpacity, Text, TextInput } from "react-native";
import { Task } from "../interfaces";

export default function TaskScreen() {
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const [task, settask] = useState<{ title: string; description: string } | null>(null)

  const handleSaveTask = () => {
    const newTask = {
      title: title,
      description: description,
    }
    settask(newTask)
  }

  return (
    <View>
      <View>
        <TextInput onChangeText={(e) => settitle(e)} placeholder='Digite o Titulo de sua tarefa' />
        <TextInput onChangeText={(e) => setdescription(e)} placeholder='Digite o Titulo de sua tarefa' />
      </View>
      <TouchableOpacity onPress={handleSaveTask}>
        <Text>Guardar Tarefa</Text>
      </TouchableOpacity>
      {task && (
        <View>
          <Text>{task.title}</Text>
          <Text>{task.description}</Text>
        </View>
      )}
    </View>
  );
}
