import { Picker } from '@react-native-picker/picker';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal } from 'react-native';
import { TaskEditModalProps } from "@/types";


export default function TaskEditModal({
    isVisible,
    onClose,
    onEdit,
    initialTitle,
    initialDescription,
    initialStatus,
}: TaskEditModalProps) {
    const [title, setTitle] = useState(initialTitle);
    const [description, setDescription] = useState(initialDescription);
    const [status, setStatus] = useState(initialStatus);

    useEffect(() => {
        setTitle(initialTitle);
        setDescription(initialDescription);
        setStatus(initialStatus);
    }, [initialTitle, initialDescription, initialStatus]);

    const handleEdit = () => {
        onEdit(title, description, status);
        onClose();
    };

    return (
        <Modal visible={isVisible} animationType="slide" transparent={true}>
            <View className='flex justify-center items-center bg-blac/50'>
                <View className='bg-white p-20 rounded-lg w-4/5'>
                    <Text>Editar Tarefa</Text>
                    <TextInput
                        placeholder="Título"
                        value={title}
                        onChangeText={setTitle}
                        className='p-8 w-full border-b-2'
                    />
                    <TextInput
                        placeholder="Descrição"
                        value={description}
                        onChangeText={setDescription}
                        className='p-8 w-full border-b-2'
                    />
                    <Text>Status</Text>

                    <View className='flex flew-row justify-between mt-20'>
                        <Button title="Salvar" onPress={handleEdit} />
                        <Button title="Cancelar" onPress={onClose} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}
