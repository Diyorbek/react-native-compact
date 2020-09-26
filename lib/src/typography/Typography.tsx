import * as React from "react";
import { StyleSheet, Text, TextProps, TextStyle } from "react-native";
import { typographyStyles, TypographyVariant } from "./typographyStyles";
import {
  fontFamilyStyles,
  FontFamilyVariant,
  FontWeightVariant,
  useLoadFonts,
} from "./typographyFontFamily";
import { TypographyColor, useTypographyColors } from "./typographyColors";

interface UseTypographyStylesProps {
  variant?: TypographyVariant;
  color?: TypographyColor;
  fontWeight?: FontWeightVariant;
  fontFamily?: FontFamilyVariant;
}

export function useTypographyStyles({
  variant = "body-15",
  color = "textPrimary",
  fontFamily = "montserrat",
  fontWeight,
}: UseTypographyStylesProps): TextStyle {
  const isFontsLoaded = useLoadFonts();
  const colors = useTypographyColors();
  const defaultFontWeight: FontWeightVariant = React.useMemo(
    () =>
      (["h1", "h2", "h3", "title"] as TypographyVariant[]).includes(variant)
        ? "bold"
        : "regular",
    [variant]
  );
  const fontStyles = React.useMemo(() => {
    if (isFontsLoaded) {
      return fontFamilyStyles[fontFamily][fontWeight || defaultFontWeight];
    }

    return {};
  }, [defaultFontWeight, fontFamily, fontWeight, isFontsLoaded]);

  return React.useMemo(() => {
    const styles = StyleSheet.flatten([
      typographyStyles[variant],
      colors[color],
      fontStyles,
    ]);

    return styles;
  }, [variant, fontStyles, colors]);
}

interface TypographyProps
  extends React.PropsWithChildren<UseTypographyStylesProps> {
  textProps?: Omit<TextProps, "style">;
}

export function Typography({
  children,
  textProps,
  ...restProps
}: TypographyProps) {
  const styles = useTypographyStyles(restProps);

  return (
    <Text {...textProps} style={styles}>
      {children}
    </Text>
  );
}
