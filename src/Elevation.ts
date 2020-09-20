import { StyleSheet } from "react-native";

export const elevation = StyleSheet.create({
  [1]: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 2,
    elevation: 1,
  },
});
