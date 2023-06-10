import { View, Text, Button, StyleSheet } from "react-native";
import { ControlledTextInput as TextInput } from "../../components/form/controlled-text-input";
import { ControlledPicker as Picker } from "../../components/form/controlled-picker";
import { useForm, SubmitHandler, Control, FieldValues } from "react-hook-form";
import { DEFAULT_DAYS, DayPicker } from "../../components/form/day-picker";
import { CreateGoal } from "../../library/models";

interface NewGoalFormProps {
  onSubmitGoal: (newGoal: CreateGoal) => void;
  onCloseModal: () => void;
}

export const NewGoalForm = ({
  onCloseModal,
  onSubmitGoal,
}: NewGoalFormProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateGoal>();
  const onSubmit: SubmitHandler<CreateGoal> = onSubmitGoal;

  return (
    <>
      <Text>Create new goal</Text>
      <View style={styles.modalForm}>
        <View style={styles.modalFormRow}>
          <Text>Name</Text>
          <TextInput
            name="name"
            control={control as unknown as Control<FieldValues>}
          />
        </View>
        <View style={styles.modalFormRow}>
          <Text>Description</Text>
          <TextInput
            name="description"
            control={control as unknown as Control<FieldValues>}
          />
        </View>
        <View style={styles.modalFormRow}>
          <Text>Weekly cost</Text>
          <TextInput
            name="weeklyCost"
            control={control as unknown as Control<FieldValues>}
          />
        </View>
        <View style={styles.modalFormRow}>
          <Text>Frequency goal</Text>
          <View style={styles.modalFormRow}>
            <Picker
              options={[{ value: "weekday", text: "Days of the week" }]}
              name="frequency.type"
              control={control as unknown as Control<FieldValues>}
            />
            <DayPicker
              days={DEFAULT_DAYS}
              onUpdateDays={(days) => console.log(days)}
            />
          </View>
        </View>
      </View>
      <View style={styles.modalButtonRow}>
        <Button title="Cancel" onPress={() => onCloseModal()} />
        <Button title="Save" onPress={handleSubmit(onSubmit)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  headerText: {
    fontSize: 24,
  },
  actionBtn: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: "green",
    color: "white",
    position: "absolute",
    top: 650,
    right: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    height: "100%",
    paddingHorizontal: 25,
    paddingVertical: 50,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalButtonRow: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalForm: {
    display: "flex",
    width: "100%",
  },
  modalFormRow: {
    marginVertical: 15,
  },
  modalFormInput: {
    width: "100%",
    borderColor: "#000",
    borderWidth: 1,
    padding: 5,
    marginTop: 10,
    borderRadius: 5,
  },
  weekdayRow: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  weekdayBtn: {
    height: 25,
    width: 25,
    borderRadius: 50,
    borderColor: "#000",
    borderWidth: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
