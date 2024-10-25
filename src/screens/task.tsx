import { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, FlatList } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { Task } from "../interfaces";
import TaskComponent from "../components/tasks";
import { addTask, removeTask, loadTasks } from "../scripts/task";

export default function TaskScreen() {
  const [taskList, setTaskList] = useState<Task[]>([]);

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
      title: `Task ${taskList.length + 1}`,
      description: "New task description",
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
