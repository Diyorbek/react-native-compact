import { StyleSheet, TextStyle } from "react-native";
import { loadAsync } from "expo-font";

loadAsync({
  "Montserrat-Bold": require("../../assets/Montserrat-Bold.ttf"),
  "Montserrat-Regular": require("../../assets/Montserrat-Regular.ttf"),
  "Montserrat-SemiBold": require("../../assets/Montserrat-SemiBold.ttf"),
});

export type FontWeightVariant = "bold" | "semiBold" | "regular";
type FontFamilyWeight = Record<FontWeightVariant, TextStyle>;

const Montserrat = StyleSheet.create<FontFamilyWeight>({
  bold: {
    fontFamily: "Montserrat-Bold",
  },
  semiBold: {
    fontFamily: "Montserrat-SemiBold",
  },
  regular: {
    fontFamily: "Montserrat-Regular",
  },
});

export type FontFamilyVariant = "montserrat";
type FontFamilyStyles = Record<FontFamilyVariant, FontFamilyWeight>;

export const fontFamilyStyles: FontFamilyStyles = {
  montserrat: Montserrat,
};
