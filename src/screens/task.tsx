import { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
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
      id: `${Date.now()} - ${taskList.length + 1}`,
      title: `Task ${taskList.length + 1}`,
      description: `Task N.${taskList.length + 1} description`,
      status: 1,
    };
    const updatedTasks = await addTask(taskList, newTask);
    setTaskList(updatedTasks);
  };

  
  const handleRemoveTask = async (taskId: string) => {
    const updatedTasks = await removeTask(taskList, taskId);
    setTaskList(updatedTasks);
  };

  const renderItem = ({ item }: { item: Task }) => {
    return (
      <View style={{ marginBottom: 10 }}>
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

  const logdata = () => {
    console.log(taskList as Task[]);
  }; // Remove this later

  return (
    <View style={globalStyles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity style={globalStyles.button} onPress={handleAddTask}>
          <Text style={globalStyles.buttonText}>Teste</Text>
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
  subContainer: {
    backgroundColor: "white",
    padding: 10,
    width: "100%",
  },
});
