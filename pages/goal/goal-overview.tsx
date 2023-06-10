import { StackScreenProps } from "@react-navigation/stack";
import { PageTitle } from "../../components/shared/page-title";
import { ScreenWrapper } from "../../components/shared/screen-wrapper";
import { GoalStackParamsList } from "../../components/navigation/goal-stack-screen";
import { usePersistence } from "../../library/use-persistence";
import { useEffect, useState } from "react";
import { Goal, UpdateGoal } from "../../library/models";
import { GoalDisplay } from "../home/goal-display";
import { StyleSheet } from "react-native";

interface GoalOverviewProps {
  goalId: string;
}

export const GoalOverview = ({
  route,
  navigation,
}: StackScreenProps<GoalStackParamsList, "goal-overview">) => {
  const [goal, setGoal] = useState<Goal>();
  const client = usePersistence();

  useEffect(() => {
    const fetchGoal = async () => {
      const res = await client.getGoal(route.params.goalId);

      console.log(route.params.goalId);
      console.log(res);

      setGoal(res);
    };

    fetchGoal();
  }, []);

  const handleGoalUpdate = async (update: UpdateGoal) => {
    const updated = await client.updateGoal(update);

    setGoal(updated);
  };

  return (
    <ScreenWrapper styles={styles.fullPageContainer}>
      {goal && (
        <>
          <PageTitle title={goal.name} />

          <GoalDisplay goal={goal} onUpdateGoal={handleGoalUpdate} />
        </>
      )}
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  fullPageContainer: {
    height: "100%",
  },
});
