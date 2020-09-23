import { StyleSheet, TextStyle } from "react-native";
import { loadAsync } from "expo-font";

loadAsync({
  MontserratBold: require("../../assets/Montserrat-Bold.ttf"),
  MontserratRegular: require("../../assets/Montserrat-Regular.ttf"),
  MontserratSemiBold: require("../../assets/Montserrat-SemiBold.ttf"),
});

export type FontWeightVariant = "bold" | "semiBold" | "regular";
type FontFamilyWeight = Record<FontWeightVariant, TextStyle>;

const Montserrat = StyleSheet.create<FontFamilyWeight>({
  bold: {
    fontFamily: "MontserratBold",
  },
  semiBold: {
    fontFamily: "MontserratSemiBold",
  },
  regular: {
    fontFamily: "MontserratRegular",
  },
});

export type FontFamilyVariant = "montserrat";
type FontFamilyStyles = Record<FontFamilyVariant, FontFamilyWeight>;

export const fontFamilyStyles: FontFamilyStyles = {
  montserrat: Montserrat,
};
