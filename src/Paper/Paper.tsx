import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Elevation, ElevationProps } from "../Elevation/Elevation";

interface PaperProps extends ElevationProps {}

export function Paper({
  children,
  elevation = "ground",
  borderRadius,
  ...props
}: PaperProps) {
  const { root } = React.useMemo(
    () =>
      StyleSheet.create({
        root: {},
      }),
    []
  );

  return (
    <Elevation elevation={elevation} borderRadius={borderRadius}>
      <View {...props} style={root}>
        {children}
      </View>
    </Elevation>
  );
}
