import * as React from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { Colors } from "../Colors";
import { elevationBase } from "./elevationBase";

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

  const elevationVariant =
    elevation === "ground"
      ? elevationBase[0]
      : elevation === "low"
      ? elevationBase[1]
      : elevation === "medium"
      ? elevationBase[3]
      : elevationBase[5];

  return (
    <View style={StyleSheet.flatten([elevationVariant.outer, root])}>
      <View style={StyleSheet.flatten([elevationVariant.inner, root])}>
        {children}
      </View>
    </View>
  );
}
