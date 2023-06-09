import { StyleSheet, View } from "react-native";
import { NavigationTab } from "./components/navigation-tab";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <NavigationTab />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    height: "100%",
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 50,
  },
});
