import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { Goal } from "../library/models";

export const GoalContext = createContext<{
  currentGoal: Goal | undefined;
  setCurrentGoal: Dispatch<SetStateAction<Goal | undefined>>;
}>({ currentGoal: undefined, setCurrentGoal: () => {} });

export const GoalProvider = ({ children }: { children: ReactNode }) => {
  const [goal, setGoal] = useState<Goal | undefined>();

  return (
    <GoalContext.Provider
      value={{ currentGoal: goal, setCurrentGoal: setGoal }}
    >
      {children}
    </GoalContext.Provider>
  );
};
