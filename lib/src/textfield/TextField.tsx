import * as React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import { useColors } from "../Colors";
import {
  fontFamilyStyles,
  useLoadFonts,
} from "../typography/typographyFontFamily";
import { textFieldStyles } from "./textFieldStyles";

export interface TextFieldProps extends TextInputProps {
  error?: boolean;
  helperText?: string;
  variant?: "filled" | "outlined";
}

export const TextField = React.forwardRef<TextInput, TextFieldProps>(
  ({ error, helperText, variant = "outlined", ...restProps }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const isFontLoaded = useLoadFonts();
    const Colors = useColors();
    const fontFamily = React.useMemo(
      () => (isFontLoaded ? fontFamilyStyles["open-sans"].regular : {}),
      [isFontLoaded]
    );

    const { textFieldDynamics } = React.useMemo(
      () =>
        StyleSheet.create({
          textFieldDynamics: {
            backgroundColor: variant === "filled" ? Colors.dark[50] : undefined,
            borderColor: error
              ? Colors.red[300]
              : isFocused
              ? Colors.blue[200]
              : variant === "filled"
              ? Colors.dark[50]
              : Colors.dark[200],
          },
        }),
      []
    );

    const textInputStyles = React.useMemo(
      () =>
        StyleSheet.flatten([
          textFieldStyles.textInput,
          fontFamily,
          textFieldDynamics,
        ]),
      [fontFamily, isFocused]
    );

    const { helperTextStyles } = React.useMemo(
      () =>
        StyleSheet.create({
          helperTextStyles: {
            marginTop: 8,
            paddingLeft: 16,
            fontSize: 15,
            lineHeight: 18,
            color: error ? Colors.red[300] : Colors.dark[300],
            ...fontFamily,
          },
        }),
      []
    );

    return (
      <View>
        <TextInput
          {...restProps}
          ref={ref}
          placeholder="texter"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={textInputStyles}
        />
        {helperText && <Text style={helperTextStyles}>{helperText}</Text>}
      </View>
    );
  }
);
