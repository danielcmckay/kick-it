/*
 * Main structs
 */
export interface Goal {
  id: string;
  name: string;
  description?: string;
  weeklyCost?: number;
  frequency: {
    type: "daysOfWeek";
    days: Days;
  };
}

export type CreateGoal = Omit<Goal, "id">

export type UpdateGoal = Partial<Goal> & Pick<Goal, "id">;

type Day = "M" | "T" | "W" | "R" | "F" | "S" | "U";

export type Days = {
  [day in Day]: boolean;
};