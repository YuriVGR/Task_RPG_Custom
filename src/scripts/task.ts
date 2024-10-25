import { Task } from "../interfaces";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const addTask = async (tasks: Task[], newTask: Task) => {
  const updatedTasks = [...tasks, newTask];
  await saveTasks(updatedTasks);
  return updatedTasks;
};

export const removeTask = async (tasks: Task[], taskId: string) => {
  const updatedTasks = tasks.filter((item) => item.id !== taskId);
  await saveTasks(updatedTasks);
  return updatedTasks;
};

export const saveTasks = async (tasks: Task[]) => {
  try {
    const jsonValue = JSON.stringify(tasks);
    await AsyncStorage.setItem("tasks", jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const loadTasks = async (): Promise<Task[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem("tasks");
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.log(e); // Handle error
    return [];
  }
};

export const clearAll = async () => {
  try {
    await AsyncStorage.clear();
    console.log("AsyncStorage successfully cleared!");
  } catch (error) {
    console.error("Failed to clear AsyncStorage:", error);
  }
};
