import { CreateGoal, Goal, UpdateGoal } from "./models";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

interface IKickitClient {
  dbName: string;
  getGoalOveriew: () => Promise<Record<string, Goal>>;
  getGoal: (id: string) => Promise<Goal>;
  createGoal: (goal: CreateGoal) => Promise<Goal>;
  updateGoal: (update: UpdateGoal) => Promise<Goal>;
  // deleteGoal: () => {}
}

export class KickitLocalClient implements IKickitClient {
  dbName: string;

  constructor(dbName: string) {
    this.dbName = dbName;
  }

  public async getGoalOveriew() {
    try {
      const keys = await AsyncStorage.getAllKeys();

      const results = Object.fromEntries(
        (await AsyncStorage.multiGet(keys)).map(([k, v]) => [
          k as string,
          JSON.parse(v as string),
        ])
      );

      return results as Record<string, Goal>;
    } catch (err) {
      console.warn(err);
      throw err;
    }
  }

  public async createGoal(goal: CreateGoal) {
    try {
      const id = uuidv4();

      await AsyncStorage.setItem(id, JSON.stringify({ id, ...goal }));

      return { id, ...goal } as Goal;
    } catch (err) {
      console.error("err");
      throw err;
    }
  }

  public async getGoal(id: string) {
    try {
      return JSON.parse((await AsyncStorage.getItem(id)) as string);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  public async updateGoal(update: UpdateGoal) {
    try {
      await AsyncStorage.mergeItem(update.id, JSON.stringify(update));

      const updated = await AsyncStorage.getItem(update.id);

      return JSON.parse(updated as string) as Goal;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}
