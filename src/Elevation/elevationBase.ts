import { StyleSheet, ViewStyle } from "react-native";
import { LightThemeColors } from "../Colors";

interface ElevationStyle {
  inner: ViewStyle;
  outer: ViewStyle;
}

interface ElevationBase {
  [0]: ElevationStyle;
  [1]: ElevationStyle;
  [3]: ElevationStyle;
  [5]: ElevationStyle;
}

export const elevationBase: ElevationBase = {
  [0]: StyleSheet.create({
    inner: {
      borderWidth: 1,
      borderRadius: 4,
      borderColor: LightThemeColors.dark[500],
    },
    outer: {},
  }),
  [1]: StyleSheet.create({
    inner: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.12,
      shadowRadius: 2,
      elevation: 1,
      zIndex: 1,
    },
    outer: {
      shadowColor: "#000",
      shadowOpacity: 0.06,
      shadowRadius: 6,
      zIndex: 1,
      elevation: 1,
    },
  }),
  [3]: StyleSheet.create({
    inner: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.12,
      shadowRadius: 20,
      elevation: 1,
      zIndex: 1,
    },
    outer: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.08,
      shadowRadius: 6,
      zIndex: 1,
      elevation: 1,
    },
  }),
  [5]: StyleSheet.create({
    inner: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.18,
      shadowRadius: 24,
      elevation: 1,
      zIndex: 1,
    },
    outer: {},
  }),
};
