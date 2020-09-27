import * as React from "react";
import { View } from "react-native";
import { Elevation, ElevationProps } from "../elevation/Elevation";
import { ElevationLevel } from "../elevation/elevationStyles";

export interface PaperProps extends Omit<ElevationProps, "level"> {
  elevation?: ElevationLevel;
}

export function Paper({
  children,
  elevation = "ground",
  borderRadius,
  backgroundColor,
  ...props
}: PaperProps) {
  return (
    <Elevation
      level={elevation}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
    >
      <View {...props}>{children}</View>
    </Elevation>
  );
}
