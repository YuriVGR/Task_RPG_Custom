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
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text>Editar Tarefa</Text>
                    <TextInput
                        placeholder="Título"
                        value={title}
                        onChangeText={setTitle}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Descrição"
                        value={description}
                        onChangeText={setDescription}
                        style={styles.input}
                    />
                    <Text>Status</Text>
                    <Picker
                        selectedValue={status}
                        onValueChange={(itemValue) => setStatus(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Pendente" value={1} />
                        <Picker.Item label="Cancelado" value={3} />
                        <Picker.Item label="Concluído" value={2} />
                    </Picker>
                    <View style={styles.buttonContainer}>
                        <Button title="Salvar" onPress={handleEdit} />
                        <Button title="Cancelar" onPress={onClose} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    input: {
        borderBottomWidth: 1,
        marginBottom: 10,
        padding: 8,
    },
    picker: {
        height: 50,
        width: '100%',
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
});
