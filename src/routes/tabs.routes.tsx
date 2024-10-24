import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home";
import SettingScreen from "../screens/settings";
import TaskScreen from "../screens/task";
import RPGScreen from "../screens/rolepg";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({color, size}) => {
          let iconName = "house"
          if (route.name === "Home") {
            iconName === "hoime"
          } if (route.name === "RPG") {
            iconName === "sword"
          }
          return <></>
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="RPG" component={RPGScreen} />
      <Tab.Screen name="Tasks" component={TaskScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}
