import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../views/home";
import SettingScreen from "../views/settings";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}
