import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Home } from "../../pages/home/home";
import { GoalOverview } from "../../pages/goal/goal-overview";
import { GoalStats } from "../../pages/goal/goal-stats";
import { GoalJournal } from "../../pages/goal/goal-journal";
import { NavTabParamList } from "./navigation-tab";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type GoalTabParamList = {
  ["goal-details"]: { goalId: string };
  ["goal-stats"]: { goalId: string };
  ["goal-journal"]: { goalId: string };
};

const GoalStack = createMaterialTopTabNavigator<GoalTabParamList>();

export const GoalStackScreen = ({
  route,
}: BottomTabScreenProps<NavTabParamList, "goal-overview">) => {
  console.log("goal stack routes", route);

  return (
    <GoalStack.Navigator
      screenOptions={() => ({ tabBarStyle: { display: "none" } })}
      sceneContainerStyle={{ backgroundColor: " #E6EAED" }}
    >
      <GoalStack.Screen name="goal-details" component={GoalOverview} />
      {/* <GoalStack.Screen name="goal-stats" component={GoalStats} /> */}
      <GoalStack.Screen name="goal-journal" component={GoalJournal} />
    </GoalStack.Navigator>
  );
};
