import { useMemo } from "react";
import { ColorValue, StyleSheet, ViewStyle } from "react-native";
import { useColors } from "../Colors";
import { BorderRaduis, borderRaduisStyles } from "./borderRadiusStyles";

interface ElevationStyle {
  inner: ViewStyle;
  outer: ViewStyle;
}

type ElevationDegree = 0 | 1 | 3 | 5;
export type ElevationLevel = "ground" | "low" | "medium" | "high";

type ElevationStyles = Record<ElevationDegree, ElevationStyle>;

export const elevationStyles: ElevationStyles = {
  [0]: StyleSheet.create<ElevationStyle>({
    inner: {},
    outer: {
      borderWidth: 1,
    },
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
    inner: {},
    outer: {
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
  }),
};

export interface UseElevationStyles {
  level?: ElevationLevel;
  borderRadius?: BorderRaduis;
  backgroundColor?: ColorValue;
}

export function useElevationStyles({
  backgroundColor,
  borderRadius,
  level,
}: UseElevationStyles) {
  const Colors = useColors();

  return useMemo(() => {
    const borderRaduisStyle = borderRadius && borderRaduisStyles[borderRadius];

    const { inner, outer } =
      level === "ground"
        ? elevationStyles[0]
        : level === "low"
        ? elevationStyles[1]
        : level === "medium"
        ? elevationStyles[3]
        : elevationStyles[5];

    const elevation: ElevationStyle = {
      inner: StyleSheet.flatten([inner, borderRaduisStyle]),
      outer: StyleSheet.flatten([
        outer,
        borderRaduisStyle,
        {
          backgroundColor: backgroundColor || Colors.white[100],
          borderColor: Colors.dark[500],
        },
      ]),
    };

    return elevation;
  }, [backgroundColor, borderRadius, level]);
}
