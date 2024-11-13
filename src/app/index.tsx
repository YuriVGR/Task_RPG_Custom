import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    Image,
    StyleSheet,
    View,
    Text,
    Button,
    ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const STORAGE_KEY = "firstTime";
const TIMEOUT = 2250;

export default function WelcomeScreen() {
    const [isFirstTime, setIsFirstTime] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const checkOnboarding = async () => {
        try {
            const firstTime = await AsyncStorage.getItem(STORAGE_KEY);

            if (firstTime === null) {
                setIsFirstTime(true);
                setIsLoading(false);
            } else {
                setTimeout(() => {
                    router.push("/(tabs)/");
                }, TIMEOUT);
            }
        } catch (e) {
            console.log("Failed to check AsyncStorage:", e);
        }
    };

    useEffect(() => {
        checkOnboarding();
    }, []);

    const handleStart = async () => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, "true");
            router.push("/(tabs)/");
        } catch (e) {
            console.error("Failed to save onboarding status:", e);
        }
    };

    if (isLoading) {
        return (
            <SafeAreaView style={styles.container}>
                <ActivityIndicator size="large" color="#6A0DAD" />
                <Text style={styles.welcomeText}>Carregando...</Text>
            </SafeAreaView>
        );
    }

    if (!isFirstTime) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={{
                    uri: "https://example.com/path-to-rpg-background.jpg",
                }}
                style={styles.backgroundImage}
            />
            <View style={styles.overlay}>
                <Text style={styles.welcomeText}>Bem-Vindo, Aventureiro!</Text>
                <Text style={styles.subText}>
                    Complete suas tarefas para ganhar pontos de experiência e
                    subir de nível!
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
                        onPress={handleStart}
                        color="#6A0DAD"
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
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
