import { useState } from "react";
import { View, TouchableOpacity, Text, TextInput, FlatList } from "react-native";
import { Task } from "../interfaces";

export default function TaskScreen() {
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const [task, settask] = useState<{ title: string; description: string }[]>([])

  const handleSaveTask = () => {
    const newTask = {
      title: title,
      description: description,
    }
    settask([...task, newTask])

    settitle("")
    setdescription("")
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
      <FlatList 
        data={task}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
        />
    </View>
  );
}
