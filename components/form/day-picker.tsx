import { View, Text, StyleSheet, Pressable } from "react-native";
import { Days } from "../../library/models";

export const DEFAULT_DAYS: Days = {
  M: false,
  T: false,
  W: false,
  R: false,
  F: false,
  S: false,
  U: false,
};

interface DayPickerProps {
  days: Days;
  onUpdateDays: (days: Days) => void;
}

export const DayPicker = ({ days, onUpdateDays }: DayPickerProps) => {
  return (
    <View style={styles.weekdayRow}>
      {["M", "T", "W", "R", "F", "S", "U"].map((day) => (
        <View
          key={day}
          style={{
            ...styles.weekdayBtn,
            ...(!!days[day as keyof Days]
              ? { backgroundColor: "#E59898" }
              : {}),
          }}
        >
          <Pressable
            onPress={() =>
              onUpdateDays({ ...days, [day]: !days[day as keyof Days] })
            }
          >
            <Text>{day}</Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  weekdayRow: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
  },
  weekdayBtn: {
    height: 30,
    width: 30,
    borderRadius: 50,
    borderColor: "#000",
    borderWidth: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
