import React from 'react';
import { Image, StyleSheet, View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// 1. Defina os tipos de parâmetros das telas de navegação
type TasksStackParamList = {
  Home: undefined;
  Tasks: undefined;
};

// 2. Defina o tipo de navegação para HomeScreen
type HomeScreenNavigationProp = NativeStackNavigationProp<TasksStackParamList, 'Home'>;

export default function HomeScreen() {
  // 3. Inicialize a navegação com o tipo correto
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    opacity: 0.8,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: '#DDD',
    textAlign: 'center',
    marginBottom: 20,
  },
  characterImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%',
  },
});
