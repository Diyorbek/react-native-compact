import * as React from "react";
import { View, ViewProps } from "react-native";

import { BorderRaduis } from "./borderRadiusStyles";
import { ElevationLevel, useElevationStyles } from "./elevationStyles";

export interface ElevationProps
  extends Omit<React.PropsWithChildren<ViewProps>, "style"> {
  elevation?: ElevationLevel;
  borderRadius?: BorderRaduis;
}

export function Elevation({
  borderRadius,
  elevation,
  children,
}: ElevationProps) {
  const elevationStyles = useElevationStyles({
    borderRadius,
    level: elevation,
  });

  return (
    <View style={elevationStyles.outer}>
      <View style={elevationStyles.inner}>{children}</View>
    </View>
  );
}
