import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Account } from "../../pages/account";
import Icon from "react-native-vector-icons/FontAwesome";
import { GoalStackScreen } from "./goal-stack-screen";
import { Home } from "../../pages/home/home";

export type NavTabParamList = {
  ["Home"]: undefined;
  ["goal-overview"]: { goalId: string };
  ["Account"]: undefined;
  ["goal-overview"]: { goalId: string };
};

const Tab = createBottomTabNavigator<NavTabParamList>();

export const NavigationTab = () => (
  <Tab.Navigator
    initialRouteName="Home"
    sceneContainerStyle={{ backgroundColor: "#E6EAED" }}
    screenOptions={({ route }) => ({
      headerBackgroundContainerStyle: {
        width: 0,
        padding: 0,
      },
      headerTitleContainerStyle: {
        width: "100%",
        alignItems: "center",
        margin: 0,
      },
      tabBarIcon: ({ size, color, focused }) => {
        let iconName = "";

        if (route.name === "Home") {
          iconName = "home";
        }

        if (route.name === "Account") {
          iconName = "user";
        }

        return <Icon name={iconName} size={size} color="white" />;
      },
      tabBarLabelStyle: { color: "white" },
      tabBarIconStyle: { color: "white" },
      tabBarStyle: {
        backgroundColor: "#738EA6",
        height: 100,
        paddingBottom: 25,
      },
    })}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen
      name="goal-overview"
      options={{ tabBarItemStyle: { display: "none" }, headerShown: false }}
      component={GoalStackScreen}
    />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);
