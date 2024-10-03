import { View, Text } from "react-native";

type CalcButtonText = { buttonText: string; isActive: boolean };
type RedResetButt = { buttonRed: string; isActive: boolean };

export function CalcButton({ buttonText, isActive }: CalcButtonText) {
  return (
    <View
      style={{
        flex: 1,
        borderRadius: 7,
        padding: 10,
        margin: 2,
        backgroundColor: isActive ? "blue" : "green",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white" }}>{buttonText}</Text>
    </View>
  );
}

export function RedResetButton({ buttonRed, isActive }: RedResetButt) {
  return (
    <View
      style={{
        flex: 1,
        borderRadius: 7,
        padding: 10,
        margin: 2,
        backgroundColor: isActive ? "green" : "red",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white" }}>{buttonRed}</Text>
    </View>
  );
}
