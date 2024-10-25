import { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
} from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { Task } from "../interfaces";
import TaskComponent from "../components/tasks";
import { addTask, removeTask, loadTasks } from "../scripts/task";

export default function TaskScreen() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [title, onChangeTitle] = useState("");
  const [description, onChangeDescription] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      const loadedTasks = await loadTasks();
      setTaskList(loadedTasks);
    };
    fetchTasks();
  });

  const handleAddTask = async () => {
    const newTask: Task = {
      id: taskList.length + 1,
      title: `${title}`,
      description: `${description}`,
      status: 3,
    };
    const updatedTasks = await addTask(taskList, newTask);
    setTaskList(updatedTasks);
  };

  const handleRemoveTask = async (taskId: number) => {
    const updatedTasks = await removeTask(taskList, taskId);
    setTaskList(updatedTasks);
  };

  const renderItem = ({ item }: { item: Task }) => {
    return (
      <View style={{ marginBottom: 20 }}>
        <TaskComponent
          id={item.id}
          title={item.title}
          description={item.description}
          status={item.status}
          removeTask={handleRemoveTask}
        />
      </View>
    );
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.subContainer}>
        <Text>Gerar Task</Text>
        <View>
          <Text>Titulo:</Text>
          <TextInput
            onChangeText={onChangeTitle}
            style={styles.input}
            value={title}
          />
        </View>
        <View>
          <Text>Descrição:</Text>
          <TextInput
            onChangeText={onChangeDescription}
            style={styles.input}
            value={description}
          />
        </View>
        <TouchableOpacity onPress={handleAddTask}>
          <Text>Gerar task</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={taskList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={{ width: "100%", gap: 10, height: "100%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {},
});
