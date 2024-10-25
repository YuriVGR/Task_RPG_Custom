import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home";
import SettingScreen from "../screens/settings";
import TaskScreen from "../screens/task";
import RPGScreen from "../screens/rolepg";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faSwords,
  faBarsProgress,
  faCog,
} from "@fortawesome/pro-solid-svg-icons";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: IconDefinition = faHome;
          if (route.name === "RPG") {
            iconName === faSwords;
          } else if (route.name === "Tasks") {
            iconName === faBarsProgress;
          } else if (route.name === "Settings") {
            iconName === faCog;
          }
          return <FontAwesomeIcon icon={iconName} color={color} size={size} />;
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
