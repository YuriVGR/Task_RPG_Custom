import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image, StyleSheet, View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { router } from "expo-router";

// 1. Defina os tipos de parâmetros das telas de navegação
type TasksStackParamList = {
    Home: undefined;
    Tasks: undefined;
};

// 2. Defina o tipo de navegação para HomeScreen
type HomeScreenNavigationProp = NativeStackNavigationProp<
    TasksStackParamList,
    "Home"
>;

export default function HomeScreen() {
    const [isFirst, setIsFirst] = useState(true);

    useEffect(() => {
        const checkFirstTime = async () => {
            try {
                const firstTime = await AsyncStorage.getItem("firstTime");
                if (firstTime !== null) {
                    setTimeout(async () => {
                        setIsFirst(false);
                        router.push("/(tabs)/");
                    }, 3000);
                }
            } catch (e) {
                console.log("Failed to check AsyncStorage:", e);
            }
        };

        checkFirstTime();
    }, []);

    const firstTime = () => {
        AsyncStorage.setItem("firstTime", "true");
        router.push("/(tabs)/");
    };

    return (
        <>
            {isFirst ? (
                <SafeAreaView style={styles.container}>
                    <Text style={styles.welcomeText}>Carregando...</Text>
                </SafeAreaView>
            ) : (
                <SafeAreaView style={styles.container}>
                    <Image
                        source={{
                            uri: "https://example.com/path-to-rpg-background.jpg",
                        }}
                        style={styles.backgroundImage}
                    />
                    <View style={styles.overlay}>
                        <Text style={styles.welcomeText}>
                            Bem-Vindo, Aventureiro!
                        </Text>
                        <Text style={styles.subText}>
                            Complete suas tarefas para ganhar pontos de
                            experiência e subir de nível!
                        </Text>
                        <Image
                            source={{
                                uri: "https://example.com/path-to-character-image.png",
                            }}
                            style={styles.characterImage}
                        />
                        <View style={styles.buttonContainer}>
                            <Button
                                title="Iniciar Missão"
                                onPress={firstTime}
                                color="#6A0DAD"
                            />
                        </View>
                    </View>
                </SafeAreaView>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
    backgroundImage: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: "cover",
        opacity: 0.8,
    },
    overlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: 20,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#FFF",
        textAlign: "center",
        marginBottom: 10,
    },
    subText: {
        fontSize: 16,
        color: "#DDD",
        textAlign: "center",
        marginBottom: 20,
    },
    characterImage: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    buttonContainer: {
        marginTop: 20,
        width: "80%",
    },
});
