import { useState } from "react";
import { PageTitle } from "../../components/shared/page-title";
import { ScreenWrapper } from "../../components/shared/screen-wrapper";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ValueWithLabel } from "../../components/shared/value-with-label";
import Icon from "react-native-vector-icons/FontAwesome";

interface GoalJournalProps {}

export const GoalJournal = ({}: GoalJournalProps) => {
  const [entries] = useState<{ title: string; date: Date }[]>([
    { title: "Test", date: new Date() },
    { title: "Test", date: new Date() },
    { title: "Test", date: new Date() },
    { title: "Test", date: new Date() },
    { title: "Test", date: new Date() },
    { title: "Test", date: new Date() },
    { title: "Test", date: new Date() },
  ]);
  return (
    <ScreenWrapper styles={styles.fullPageContainer}>
      <PageTitle title="Goal Journal" />

      <View style={styles.goalContainer}>
        <FlatList
          data={entries}
          renderItem={({ item }) => (
            <View style={styles.journalEntry}>
              <ValueWithLabel label={item.title}>
                <Text>{item.date.toDateString()}</Text>
              </ValueWithLabel>
              <Pressable>
                <Icon name="close" size={20} />
              </Pressable>
            </View>
          )}
        />
      </View>
    </ScreenWrapper>
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
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
  journalEntry: {
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
