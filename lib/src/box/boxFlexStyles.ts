import { FlexStyle } from "react-native";

export type InnerFlexStyles = Pick<
  FlexStyle,
  | "alignContent"
  | "alignItems"
  | "flexDirection"
  | "flexWrap"
  | "height"
  | "justifyContent"
  | "maxWidth"
  | "maxHeight"
  | "minWidth"
  | "minHeight"
  | "overflow"
  | "width"
>;

export type OuterFlexStyles = Pick<
  FlexStyle,
  | "alignSelf"
  | "bottom"
  | "end"
  | "flex"
  | "flexBasis"
  | "flexGrow"
  | "flexShrink"
  | "left"
  | "position"
  | "right"
  | "start"
  | "top"
>;
