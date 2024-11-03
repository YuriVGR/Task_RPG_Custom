import { FontAwesome5, Foundation } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import TaskDeleteModal from './TaskDeleteModal';

interface TaskCardProps {
    id: string;
    title: string;
    description: string;
    status: number;
    removeTask: (taskId: string) => void;
}

const statusColors = {
    1: 'bg-yellow-200',
    2: 'bg-green-200',
    3: 'bg-red-200',
    default: 'bg-gray-200',
};

const borderColors = {
    1: 'border-yellow-400',
    2: 'border-green-400',
    3: 'border-red-400',
    default: 'border-gray-400',
};

const statusTexts = {
    1: 'Pendente',
    2: 'Concluído',
    3: 'Cancelado',
    default: 'Desconhecido',
};

const TaskCard: React.FC<TaskCardProps> = ({ title, description, status, id, removeTask }) => {
    const statusColor = statusColors[status] || statusColors.default;
    const borderColor = borderColors[status] || borderColors.default;
    const statusText = statusTexts[status] || statusTexts.default;
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
      };
    
      // Função para fechar o modal
      const closeModal = () => {
        setModalVisible(false);
      };

    return (
        <View className={`${statusColor} ${borderColor} m-4 rounded-lg p-4 border-2`}>
            <Text className="font-semibold text-lg p-2">{title}</Text>
            <View className="h-0.5 bg-black my-2" />
            <Text className="text-sm p-2">{description}</Text>
            <View className="h-0.5 bg-black my-2" />
            <View className="flex-row p-2">
                <Foundation name="info" size={20} color="black" />
                <Text className="text-sm px-2">{statusText}</Text>
                <TouchableOpacity className="px-2 ml-auto" onPress={openModal} >
                    <FontAwesome5  name="trash-alt" size={20} color="black" />
                </TouchableOpacity>
                <FontAwesome5 name="edit" size={20} color="black" />
            </View>
            <TaskDeleteModal isVisible={modalVisible} onClose={closeModal} onDelete={() => removeTask(id)} />
        </View>
    );
};

export default TaskCard;