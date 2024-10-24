import { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  FlatList,
} from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { Task } from "../interfaces";
import { tasks } from "../data/task";
import TaskComponent from "../components/tasks";

export default function TaskScreen() {
  const renderItem = ({ item }: { item: Task }) => {
    return (
      <TaskComponent
        id={item.id}
        title={item.title}
        description={item.description}
        status={item.status}
      />
    );
  };

  return (
    <View style={globalStyles.container}>
      <View>
        <TouchableOpacity></TouchableOpacity>
        <TouchableOpacity></TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
