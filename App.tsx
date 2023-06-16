import { StyleSheet, View } from "react-native";
import { NavigationTab } from "./components/navigation/navigation-tab";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { GoalProvider } from "./context/goal-context";

export default function App() {
  return (
    <GoalProvider>
      <NavigationContainer>
        <View style={styles.container}>
          <NavigationTab />
        </View>
      </NavigationContainer>
    </GoalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6EAED",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    height: "100%",
    width: "100%",
    paddingTop: 50,
  },
});
