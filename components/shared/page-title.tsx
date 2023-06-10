import { Text } from "react-native";

interface PageTitleProps {
  title: string;
  styles?: StyleSheet;
}

export const PageTitle = ({ title, styles }: PageTitleProps) => (
  <Text style={{ fontSize: 24, ...styles }}>{title}</Text>
);
