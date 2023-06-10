import { View, Text, StyleSheet, Pressable } from "react-native";
import { DEFAULT_DAYS, DayPicker } from "../../components/form/day-picker";
import { useNavigation } from "@react-navigation/native";
import { Goal } from "../../library/models";
import { StackNavigationProp } from "@react-navigation/stack";
import { GoalStackParamsList } from "../../components/navigation/goal-stack-screen";

interface GoalDisplayProps {
  goal: Goal;
  onUpdateGoal: (goal: Goal) => void;
}

export const GoalDisplay = ({ goal, onUpdateGoal }: GoalDisplayProps) => {
  const navigation = useNavigation<StackNavigationProp<GoalStackParamsList>>();
  return (
    <View style={styles.goalContainer}>
      <Pressable
        onPress={() => {
          console.log(navigation.getState());

          navigation.navigate("goal-overview", { goalId: goal.id });
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
