import { ReactNode } from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

export const ValueWithLabel = ({
  label,
  children,
  styles,
}: {
  label: string;
  children: ReactNode;
  styles?: Partial<StyleProp<ViewStyle>>;
}) => {
  return (
    <View>
      <Text style={{ ...wrapperStyles.label, ...styles }}>{label}</Text>
      {children}
    </View>
  );
};

const wrapperStyles = StyleSheet.create({
  container: {},
  label: {
    fontWeight: "bold",
  },
});
