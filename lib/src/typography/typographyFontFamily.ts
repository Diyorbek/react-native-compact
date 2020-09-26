import { StyleSheet, TextStyle } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

export function useLoadFonts() {
  const [isLoaded] = useFonts({
    "Montserrat-Bold": Montserrat_700Bold,
    "Montserrat-Regular": Montserrat_400Regular,
    "Montserrat-SemiBold": Montserrat_600SemiBold,
  });

  return isLoaded;
}

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
