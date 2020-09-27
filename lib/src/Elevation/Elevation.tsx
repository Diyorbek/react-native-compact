import * as React from "react";
import { View, ViewProps } from "react-native";

import { UseElevationStyles, useElevationStyles } from "./elevationStyles";

export interface ElevationProps
  extends Omit<React.PropsWithChildren<ViewProps>, "style">,
    UseElevationStyles {}

export function Elevation({
  backgroundColor,
  borderRadius,
  level,
  children,
  ...restProps
}: ElevationProps) {
  const elevationStyles = useElevationStyles({
    backgroundColor,
    borderRadius,
    level,
  });

  return (
    <View style={elevationStyles.outer}>
      <View {...restProps} style={elevationStyles.inner}>
        {children}
      </View>
    </View>
  );
}
