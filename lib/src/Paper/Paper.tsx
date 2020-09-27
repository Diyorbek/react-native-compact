import * as React from "react";
import { View } from "react-native";
import { Elevation, ElevationProps } from "../elevation/Elevation";
import { ElevationLevel } from "../elevation/elevationStyles";

interface PaperProps extends Omit<ElevationProps, "level"> {
  elevation?: ElevationLevel;
}

export function Paper({
  children,
  elevation = "ground",
  borderRadius,
  ...props
}: PaperProps) {
  return (
    <Elevation level={elevation} borderRadius={borderRadius}>
      <View {...props}>{children}</View>
    </Elevation>
  );
}
