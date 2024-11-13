import React from 'react';
import { View, Text, Switch, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen() {
  const [isNotificationsEnabled, setNotificationsEnabled] = React.useState(false);
  const [isDarkTheme, setDarkTheme] = React.useState(false);

  const toggleNotifications = () => setNotificationsEnabled((previousState) => !previousState);
  const toggleDarkTheme = () => setDarkTheme((previousState) => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Configurações</Text>

      {/* Configuração de Notificações */}
      <View style={styles.settingRow}>
        <Text style={styles.settingLabel}>Notificações</Text>
        <Switch
          value={isNotificationsEnabled}
          onValueChange={toggleNotifications}
        />
      </View>

      {/* Configuração de Tema */}
      <View style={styles.settingRow}>
        <Text style={styles.settingLabel}>Tema Escuro</Text>
        <Switch
          value={isDarkTheme}
          onValueChange={toggleDarkTheme}
        />
      </View>

      {/* Sobre */}
      <View style={styles.aboutSection}>
        <Text style={styles.settingLabel}>Sobre o App:</Text>
        <Text style={styles.settingDescription}>
          App de Tarefas com elementos de RPG - v0.0.1
        </Text>
      </View>

      {/* Botões */}
      <View style={styles.buttonContainer}>
        <View style={styles.buttonSpacing}>
          <Button title="Salvar Configurações" onPress={() => alert('Configurações salvas!')} />
        </View>
        <View style={styles.buttonSpacing}>
          <Button title="Redefinir Configurações" color="red" onPress={() => alert('Configurações redefinidas.')} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  aboutSection: {
    marginVertical: 20,
  },
  settingLabel: {
    fontSize: 18,
    color: '#333',
  },
  settingDescription: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
  buttonContainer: {
    marginTop: 30,
    paddingHorizontal: 40,
  },
  buttonSpacing: {
    marginVertical: 10,
  },
});
