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
    backgroundColor: "#E6EAED",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    height: "100%",
    width: "100%",
    paddingTop: 50,
  },
});
