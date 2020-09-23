import { StyleSheet, ViewStyle } from "react-native";
import { Colors } from "../Colors";

interface ElevationStyle {
  inner: ViewStyle;
  outer: ViewStyle;
}

type ElevationLevel = 0 | 1 | 3 | 5;

type ElevationBase = Record<ElevationLevel, ElevationStyle>;

export const elevationBase: ElevationBase = {
  [0]: StyleSheet.create<ElevationStyle>({
    inner: {
      borderWidth: 1,
      borderRadius: 4,
      borderColor: Colors.Light.dark[500],
    },
    outer: {},
  }),
  [1]: StyleSheet.create<ElevationStyle>({
    inner: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.12,
      shadowRadius: 2,
    },
    outer: {
      shadowColor: "#000",
      shadowOpacity: 0.06,
      shadowRadius: 6,
      zIndex: 1,
      elevation: 4,
    },
  }),
  [3]: StyleSheet.create<ElevationStyle>({
    inner: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.12,
      shadowRadius: 20,
    },
    outer: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.08,
      shadowRadius: 6,
      zIndex: 3,
      elevation: 8,
    },
  }),
  [5]: StyleSheet.create<ElevationStyle>({
    inner: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.18,
      shadowRadius: 24,
      zIndex: 5,
      elevation: 12,
    },
    outer: {},
  }),
};
