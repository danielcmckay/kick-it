import { View, Text, StyleSheet } from "react-native";
import { INewGoalForm } from "./home";
import { DEFAULT_DAYS, DayPicker } from "../../components/form/day-picker";

interface GoalDisplayProps {
  goal: INewGoalForm;
  onUpdateGoal: (goal: INewGoalForm) => void;
}

export const GoalDisplay = ({ goal, onUpdateGoal }: GoalDisplayProps) => {
  return (
    <View style={styles.goalContainer}>
      <Text style={styles.goalTitle}>{goal.name}</Text>
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
