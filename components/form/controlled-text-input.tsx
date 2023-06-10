import { TextInput, StyleSheet } from "react-native";
import { UseControllerProps, useController } from "react-hook-form";

export const ControlledTextInput = <T,>({
  name,
  control,
  defaultValue = "",
}: UseControllerProps) => {
  const { field } = useController({ name, control, defaultValue });

  return (
    <TextInput
      value={field.value}
      onChangeText={field.onChange}
      style={styles.formInput}
    />
  );
};

const styles = StyleSheet.create({
  formInput: {
    width: "100%",
    borderColor: "#000",
    borderWidth: 1,
    padding: 5,
    marginTop: 10,
    borderRadius: 5,
  },
});
