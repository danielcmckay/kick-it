import { View, Text, StyleSheet, Pressable } from "react-native";
import { DEFAULT_DAYS, DayPicker } from "../../components/form/day-picker";
import { useNavigation } from "@react-navigation/native";
import { Goal } from "../../library/models";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { useContext } from "react";
import { CompositeScreenProps } from "@react-navigation/core";
import { GoalContext } from "../../context/goal-context";
import { NavTabParamList } from "../../components/navigation/navigation-tab";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { GoalTabParamList } from "../../components/navigation/goal-stack-screen";

interface GoalDisplayProps {
  goal: Goal;
  onUpdateGoal: (goal: Goal) => void;
}

export const GoalDisplay = ({ goal, onUpdateGoal }: GoalDisplayProps) => {
  const { setCurrentGoal } = useContext(GoalContext);
  const navigation = useNavigation<StackNavigationProp<NavTabParamList>>();
  return (
    <View style={styles.goalContainer}>
      <Pressable
        onPress={() => {
          setCurrentGoal(goal);
          navigation.navigate("goal-overview", {
            // @ts-ignore
            screen: "goal-details",
            params: { goalId: goal.id },
          });
        }}
      >
        <Text style={styles.goalTitle}>{goal.name}</Text>
      </Pressable>
      <DayPicker
        days={goal.frequency.days ?? DEFAULT_DAYS}
        onUpdateDays={(daysUpdate) =>
          onUpdateGoal({
            ...goal,
            frequency: { ...goal.frequency, days: daysUpdate },
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  goalContainer: {
    width: "100%",
    height: 100,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#F2F5F5",
    borderRadius: 5,
    display: "flex",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  goalTitle: {
    fontSize: 18,
  },
  statusTitle: {
    fontSize: 12,
  },
});
