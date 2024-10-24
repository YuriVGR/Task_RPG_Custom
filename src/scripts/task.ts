import { Task } from "../interfaces";
import { taskList } from "../data/task";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const addTask = async (newTask: Task) => {
  taskList.push(newTask);
  await saveTasks(taskList);
};

export const removeTask = async (taskId: number) => {
  const index = taskList.findIndex((item) => item.id === taskId);
  if (index > -1) {
    taskList.splice(index, 1);
    await saveTasks(taskList);
  }
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
