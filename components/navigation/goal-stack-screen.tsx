import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../../pages/home/home";
import { GoalOverview } from "../../pages/goal/goal-overview";
import { GoalStats } from "../../pages/goal/goal-stats";
import { GoalJournal } from "../../pages/goal/goal-journal";

export type GoalStackParamsList = {
  ["goal-list"]: undefined;
  ["goal-overview"]: { goalId: string };
  ["goal-stats"]: undefined;
  ["goal-journal"]: undefined;
};

const GoalStack = createStackNavigator<GoalStackParamsList>();

export const GoalStackScreen = () => {
  return (
    <GoalStack.Navigator
      screenOptions={() => ({
        cardStyle: { backgroundColor: "#E6EAED" },
        headerStyle: { height: 0 },
      })}
    >
      <GoalStack.Screen name="goal-list" component={Home} />
      <GoalStack.Screen name="goal-overview" component={GoalOverview} />
      <GoalStack.Screen name="goal-stats" component={GoalStats} />
      <GoalStack.Screen name="goal-journal" component={GoalJournal} />
    </GoalStack.Navigator>
  );
};
