import { Task } from '@/types/Task';
import TaskCard from '@/components/TaskCard';
import { useState } from 'react';
import { Image, StyleSheet, Platform, View, Text, ScrollView, Modal, TextInput, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const initialTasks = [
    { id: '1', title: 'Corrigir Botão de Login', description: 'É preciso que quando cliente clique em login seja validado.', status: 1 },
    { id: '2', title: 'Criar Tela de Cadastro', description: 'É preciso criar uma tela de cadastro para que os usuários possam se cadastrar na aplicação.', status: 2 },
    { id: '3', title: 'Criar Tela de Login', description: 'É preciso criar uma tela de login para que os usuários possam se logar na aplicação.', status: 3 },
];

export default function TaskScreen() {
    const [taskList, setTaskList] = useState<Task[]>(initialTasks);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [newTask, setNewTask] = useState({ title: '', description: '' });

    const removeTask = (id: string) => {
        setTaskList(taskList.filter(task => task.id !== id));
    };

    const addTask = () => {
        const newTaskId = (taskList.length + 1).toString();
        const taskToAdd = { ...newTask, id: newTaskId, status: 1 };
        setTaskList([...taskList, taskToAdd]);
        setNewTask({ title: '', description: '' });
        setIsModalVisible(false);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <Text>Lista de tarefas</Text>
                {taskList.map(task => (
                    <TaskCard key={task.id} {...task} removeTask={() => removeTask(task.id)} />
                ))}

                <TouchableOpacity onPress={() => setIsModalVisible(true)} style={styles.addButton}>
                    <Text style={styles.addButtonText}>Adicionar Tarefa</Text>
                </TouchableOpacity>
            </ScrollView>

            <Modal visible={isModalVisible} animationType="slide" transparent={true}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text>Nova Tarefa</Text>
                        <TextInput
                            placeholder="Título"
                            value={newTask.title}
                            onChangeText={(text) => setNewTask({ ...newTask, title: text })}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Descrição"
                            value={newTask.description}
                            onChangeText={(text) => setNewTask({ ...newTask, description: text })}
                            style={styles.input}
                        />
                        <View style={styles.buttonContainer}>
                            <Button title="Adicionar" onPress={addTask} />
                            <Button title="Cancelar" onPress={() => setIsModalVisible(false)} />
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    addButton: {
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        margin: 20,
    },
    addButtonText: {
        color: 'white',
        fontSize: 16,
    },
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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
});
