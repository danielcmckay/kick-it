import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  ScrollView,
} from "react-native";
import { NewGoalForm } from "./new-goal-form";
import { GoalDisplay } from "./goal-display";
import { Days } from "../../components/form/day-picker";

export interface INewGoalForm {
  id: string;
  name: string;
  description?: string;
  weeklyCost?: number;
  frequency: {
    type: "daysOfWeek";
    days: Days;
  };
}

export const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [goals, setGoals] = useState<Record<string, INewGoalForm>>({});

  const handleNewGoalSubmit = (newGoal: INewGoalForm) => {
    //TODO: Replace this with generated ID
    const key = `newGoal${Object.keys(goals).length}`;

    setGoals((prev) => ({
      ...prev,
      [key]: { ...newGoal, id: key },
    }));

    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Currently tracking</Text>

      <ScrollView
        contentContainerStyle={styles.goalsWrapper}
        directionalLockEnabled={true}
      >
        {Object.values(goals).map((goal) => (
          <GoalDisplay
            goal={goal}
            onUpdateGoal={(update) =>
              setGoals((prev) => ({ ...prev, [update.id]: { ...update } }))
            }
          />
        ))}
      </ScrollView>

      <Pressable style={styles.actionBtn} onPress={() => setShowModal(true)}>
        {() => <Text>+</Text>}
      </Pressable>
      <Modal
        presentationStyle="pageSheet"
        visible={showModal}
        onDismiss={() => setShowModal(false)}
        animationType="slide"
      >
        <View style={styles.modal}>
          <NewGoalForm
            onSubmitGoal={handleNewGoalSubmit}
            onCloseModal={() => setShowModal(false)}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  headerText: {
    fontSize: 24,
  },
  goalsWrapper: {
    width: "95%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  actionBtn: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: "green",
    color: "white",
    position: "absolute",
    top: 650,
    right: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    height: "100%",
    paddingHorizontal: 25,
    paddingVertical: 50,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalButtonRow: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalForm: {
    display: "flex",
    width: "100%",
  },
});
