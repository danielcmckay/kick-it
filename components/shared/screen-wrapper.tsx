import { ReactNode } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

interface ScreenWrapperProps {
  children: ReactNode;
  styles?: Partial<StyleProp<ViewStyle>>;
}

export const ScreenWrapper = ({ children, styles }: ScreenWrapperProps) => {
  return (
    <View style={{ ...wrapperStyles.container, ...styles }}>{children}</View>
  );
};

const wrapperStyles = StyleSheet.create({
  container: {
    padding: 20,
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
