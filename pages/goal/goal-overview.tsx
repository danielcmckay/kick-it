import { StackScreenProps } from "@react-navigation/stack";
import { PageTitle } from "../../components/shared/page-title";
import { ScreenWrapper } from "../../components/shared/screen-wrapper";
import { usePersistence } from "../../library/use-persistence";
import { useEffect, useState } from "react";
import { Goal, UpdateGoal } from "../../library/models";
import { GoalDisplay } from "../home/goal-display";
import { StyleSheet, View, Text, Button, Modal } from "react-native";
import { NewGoalForm } from "../home/new-goal-form";
import { ValueWithLabel } from "../../components/shared/value-with-label";
import { GoalTabParamList } from "../../components/navigation/goal-stack-screen";

export const GoalOverview = ({
  route,
}: StackScreenProps<GoalTabParamList, "goal-details">) => {
  const [goal, setGoal] = useState<Goal>();
  const [showEditModal, setShowEditModal] = useState(false);

  const client = usePersistence();

  useEffect(() => {
    const fetchGoal = async () => {
      const res = await client.getGoal(route.params.goalId);

      setGoal(res);
    };

    fetchGoal();
  }, []);

  const handleGoalUpdate = async (update: UpdateGoal) => {
    const updated = await client.updateGoal(update);

    setGoal(updated);
  };

  return (
    <>
      <ScreenWrapper styles={styles.fullPageContainer}>
        {goal && (
          <>
            <PageTitle title={goal.name} />

            <View style={styles.goalContainer}>
              <View style={styles.buttonRow}>
                <Button title="Edit" onPress={() => setShowEditModal(true)} />
              </View>
              <GoalDisplay goal={goal} onUpdateGoal={handleGoalUpdate} />

              <View style={styles.attributeColumn}>
                <ValueWithLabel
                  label="Description"
                  styles={styles.attributeText}
                >
                  <Text>{goal.description ?? "n/a"}</Text>
                </ValueWithLabel>

                <ValueWithLabel
                  label="Weekly cost"
                  styles={styles.attributeText}
                >
                  <Text>{goal.weeklyCost ?? "n/a"}</Text>
                </ValueWithLabel>

                <ValueWithLabel
                  label="Frequency type"
                  styles={styles.attributeText}
                >
                  <Text>{goal.frequency.type ?? "n/a"}</Text>
                </ValueWithLabel>

                <ValueWithLabel
                  label="Frequency days"
                  styles={styles.attributeText}
                >
                  <Text>
                    {Object.entries(goal.frequency.days)
                      .filter((e) => !!e[1])
                      .map(([k]) => k)
                      .join(", ") ?? "n/a"}
                  </Text>
                </ValueWithLabel>
              </View>
            </View>
          </>
        )}
      </ScreenWrapper>
      <Modal
        presentationStyle="pageSheet"
        visible={showEditModal}
        animationType="slide"
      >
        <View style={styles.modal}>
          <NewGoalForm
            currentGoal={goal}
            onCloseModal={() => setShowEditModal(false)}
            onSubmitGoal={(update) => {
              handleGoalUpdate(update as Goal);
              setShowEditModal(false);
            }}
          />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  fullPageContainer: {
    height: "100%",
  },
  goalContainer: {
    width: "100%",
    height: "80%",
    backgroundColor: "#F2F5F5",
    borderRadius: 5,
    display: "flex",
    justifyContent: "flex-start",
    marginVertical: 15,
  },
  buttonRow: {
    position: "absolute",
    bottom: 10,
    right: 25,
    zIndex: 1000,
  },
  attributeColumn: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    height: 250,
    paddingHorizontal: 25,
  },
  attributeText: {
    fontSize: 18,
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
