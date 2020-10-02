import { StyleSheet } from "react-native";
import { typographyStyles } from "../typography/typographyStyles";

export const textFieldStyles = StyleSheet.create({
  textInput: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 2,
    ...typographyStyles["body-17"],
  },
});
