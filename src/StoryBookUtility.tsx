import React from "react";
import { View } from "react-native";

export const Box = ({ w, h }: { w: number; h: number }) => (
  <View style={{ height: h, width: w }} />
);
