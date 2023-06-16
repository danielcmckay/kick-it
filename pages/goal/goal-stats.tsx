import { StackScreenProps } from "@react-navigation/stack";
import { PageTitle } from "../../components/shared/page-title";
import { ScreenWrapper } from "../../components/shared/screen-wrapper";
import React from "react";
import { GoalTabParamList } from "../../components/navigation/goal-stack-screen";

export const GoalStats = ({}: StackScreenProps<
  GoalTabParamList,
  "goal-stats"
>) => {
  return (
    <ScreenWrapper>
      <PageTitle title="GoalStats" />
    </ScreenWrapper>
  );
};
