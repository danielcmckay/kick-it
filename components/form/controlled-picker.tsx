import { StyleSheet } from "react-native";
import { UseControllerProps, useController } from "react-hook-form";
import Picker from "@ouroboros/react-native-picker";

export const ControlledPicker = <T,>(
  props: UseControllerProps & { options: { value: string; text: string }[] }
) => {
  const { name, control, defaultValue } = props;
  const { field } = useController({ name, control, defaultValue });

  return (
    <Picker
      options={props.options}
      value={field.value}
      onChanged={field.onChange}
      style={styles.formPicker}
    />
  );
};

const styles = StyleSheet.create({
  formPicker: {},
});
