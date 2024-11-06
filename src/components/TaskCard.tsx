import { FontAwesome5, Foundation } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import TaskDeleteModal from "./TaskDeleteModal";
import TaskEditModal from "./TaskEditModal";

interface TaskCardProps {
    id: string;
    title: string;
    description: string;
    status: number;
    removeTask: (taskId: string) => void;
    editTask: (
        id: string,
        title: string,
        description: string,
        status: number
    ) => void;
}

// Tipagem explícita dos objetos para resolver o problema do índice
const statusColors: { [key: number]: string } = {
    1: "bg-yellow-200",
    2: "bg-green-200",
    3: "bg-red-200",
};

const borderColors: { [key: number]: string } = {
    1: "border-yellow-400",
    2: "border-green-400",
    3: "border-red-400",
};

const iconColors: { [key: number]: string } = {
    1: "#ca8a04",
    2: "#16a34a",
    3: "#dc2626",
};

const statusTexts: { [key: number]: string } = {
    1: "Pendente",
    2: "Concluído",
    3: "Cancelado",
};

const TaskCard: React.FC<TaskCardProps> = ({
    title,
    description,
    status,
    id,
    removeTask,
    editTask,
}) => {
    const statusColor = statusColors[status] || statusColors[1];
    const borderColor = borderColors[status] || borderColors[1];
    const statusText = statusTexts[status] || statusTexts[1];

    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false); // Estado para o modal de edição

    const openDeleteModal = () => {
        setDeleteModalVisible(true);
    };

    const closeDeleteModal = () => {
        setDeleteModalVisible(false);
    };

    const openEditModal = () => {
        setEditModalVisible(true);
    };

    const closeEditModal = () => {
        setEditModalVisible(false);
    };

    const handleEdit = (title: string, description: string, status: number) => {
        editTask(id, title, description, status);
        closeEditModal();
    };

    return (
        <View
            className={`${statusColor} ${borderColor} m-4 rounded-lg p-4 border-2`}
        >
            <Text className="font-semibold text-lg p-2">{title}</Text>
            <View className="h-0.5 bg-black my-2" />
            <Text className="text-sm p-2">{description}</Text>
            <View className="h-0.5 bg-black my-2" />
            <View className="flex-row p-2">
                <Foundation name="info" size={20} color="black" />
                <Text className={`text-sm px-2 text-[${iconColors}]`}>{statusText}</Text>
                <TouchableOpacity
                    className="px-2 ml-auto"
                    onPress={openDeleteModal}
                >
                    <FontAwesome5
                        name="trash-alt"
                        size={20}
                        color={iconColors[status]}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={openEditModal}>
                    <FontAwesome5
                        name="edit"
                        size={20}
                        color={iconColors[status]}
                    />
                </TouchableOpacity>
            </View>
            <TaskDeleteModal
                isVisible={deleteModalVisible}
                onClose={closeDeleteModal}
                onDelete={() => removeTask(id)}
            />
            <TaskEditModal
                isVisible={editModalVisible}
                onClose={closeEditModal}
                onEdit={handleEdit}
                initialTitle={title}
                initialDescription={description}
                initialStatus={status}
            />
        </View>
    );
};

export default TaskCard;
