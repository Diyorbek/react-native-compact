import * as React from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { Colors } from "../Colors";
import { elevationBase, ElevationStyle } from "./elevationBase";

interface UseElevationStyles {
  level?: "ground" | "low" | "medium" | "high";
}

export function useElevationStyles({
  level,
}: UseElevationStyles): ElevationStyle {
  return React.useMemo(
    () =>
      level === "ground"
        ? elevationBase[0]
        : level === "low"
        ? elevationBase[1]
        : level === "medium"
        ? elevationBase[3]
        : elevationBase[5],
    [level]
  );
}

export interface ElevationProps
  extends Omit<React.PropsWithChildren<ViewProps>, "style"> {
  elevation?: "ground" | "low" | "medium" | "high";
  borderRadius?: 4 | 6 | 8;
}

export function Elevation({
  borderRadius = 4,
  elevation,
  children,
}: ElevationProps) {
  const { root } = React.useMemo(
    () =>
      StyleSheet.create({
        root: { borderRadius, backgroundColor: Colors.Light.white[100] },
      }),
    [borderRadius]
  );

  const elevationStyles = useElevationStyles({ level: elevation });

  return (
    <View style={StyleSheet.flatten([elevationStyles.outer, root])}>
      <View style={StyleSheet.flatten([elevationStyles.inner, root])}>
        {children}
      </View>
    </View>
  );
}
