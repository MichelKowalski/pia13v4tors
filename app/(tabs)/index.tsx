import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  Pressable,
  FlatList,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import { CalcButton, RedResetButton } from "@/components/CalcButton";

export default function HomeScreen() {
  const [calcResult, setCalcResult] = useState("");
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [calcHistory, setCalcHistory] = useState([""]);

  function doCalc(whatToDo: string) {
    const nr1 = parseInt(number1);
    const nr2 = parseInt(number2);

    if (isNaN(nr1)) {
      //number 1 is not a number.
      setErrorMsg("Första inte en siffra.");
      return;
    }

    if (isNaN(nr2)) {
      //number 2 is not a number.
      setErrorMsg("Andra inte en siffra.");
      return;
    }
    setErrorMsg("");

    if (whatToDo == "plus") {
      const resulttext = `${number1} + ${number2} = ${nr1 + nr2}`;
      setCalcResult(resulttext);
      setCalcHistory([...calcHistory, resulttext]);
    }

    if (whatToDo == "minus") {
      const resulttext = `${number1} - ${number2} = ${nr1 - nr2}`;
      setCalcResult(resulttext);
      setCalcHistory([...calcHistory, resulttext]);
    }

    if (whatToDo == "multi") {
      const resulttext = `${number1} * ${number2} = ${nr1 * nr2}`;
      setCalcResult(resulttext);
      setCalcHistory([...calcHistory, resulttext]);
    }
    setNumber1("");
    setNumber2("");
  }

  function calcPlus() {
    doCalc("plus");
  }

  function calcMinus() {
    doCalc("minus");
  }

  function calcMulti() {
    doCalc("multi");
  }

  function doReset() {
    setCalcResult("");
  }

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.bigResultNubmber}>{calcResult}</Text>

        <Text>{errorMsg}</Text>

        <TextInput
          value={number1}
          onChangeText={setNumber1}
          style={styles.calculatorTextField}
        />
        <TextInput
          value={number2}
          onChangeText={setNumber2}
          style={styles.calculatorTextField}
        />

        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Pressable style={{ flex: 1, aspectRatio: 1 }} onPress={calcPlus}>
            {({ pressed }) => (
              <CalcButton buttonText="PLUS" isActive={pressed} />
            )}
          </Pressable>

          <Pressable style={{ flex: 1, aspectRatio: 1 }} onPress={calcMinus}>
            {({ pressed }) => (
              <CalcButton buttonText="MINUS" isActive={pressed} />
            )}
          </Pressable>

          <Pressable style={{ flex: 1, aspectRatio: 1 }} onPress={calcMulti}>
            {({ pressed }) => (
              <CalcButton buttonText="MULTI" isActive={pressed} />
            )}
          </Pressable>

          <Pressable style={{ flex: 1, aspectRatio: 1 }} onLongPress={doReset}>
            {({ pressed }) => (
              <RedResetButton buttonRed="RESET" isActive={pressed} />
            )}
          </Pressable>
        </View>
        <FlatList
          data={calcHistory}
          renderItem={(raden) => <Text>{raden.item}</Text>}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  calculatorTextField: {
    backgroundColor: "lightblue",
    fontSize: 30,
  },
  bigResultNubmber: {
    fontSize: 40,
  },
});
