import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../pages/home";
import { Account } from "../pages/account";

const Tab = createBottomTabNavigator();

export function NavigationTab() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} options={{ tabBarBadge: 4 }} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}
