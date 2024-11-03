import { Image, StyleSheet, Platform, View, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View className="">
        <Text>
          Bem-Vindo! Bem Vindo 2
        </Text>
      </View>
    </SafeAreaView>
  );
}