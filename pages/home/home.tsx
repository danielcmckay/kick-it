import { useEffect, useState } from "react";
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
import { PageTitle } from "../../components/shared/page-title";
import { ScreenWrapper } from "../../components/shared/screen-wrapper";
import { CreateGoal, Goal, UpdateGoal } from "../../library/models";
import { usePersistence } from "../../library/use-persistence";

export const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [goals, setGoals] = useState<Record<string, Goal>>();

  useEffect(() => {
    const fetchOverview = async () => {
      const res = await client.getGoalOveriew();

      setGoals(res);
    };

    fetchOverview();
  }, []);

  const client = usePersistence();

  const handleNewGoalSubmit = async (newGoal: CreateGoal) => {
    //TODO: Replace this with generated ID

    const result = await client.createGoal(newGoal);

    setGoals((prev) => ({
      ...prev,
      [result.id]: result,
    }));

    setShowModal(false);
  };

  const handleUpdateGoal = async (update: UpdateGoal) => {
    const res = await client.updateGoal(update);

    setGoals((prev) => ({ ...prev, [res.id]: res }));
  };

  return (
    <ScreenWrapper>
      <PageTitle title="Currently tracking" />

      <ScrollView
        contentContainerStyle={styles.goalsWrapper}
        directionalLockEnabled={true}
      >
        {!!goals &&
          Object.values(goals).map((goal) => (
            <GoalDisplay goal={goal} onUpdateGoal={handleUpdateGoal} />
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
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
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
    zIndex: 1000,
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
