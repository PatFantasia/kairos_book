import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "constants";
import TypeMenu from "../low-components/TypeMenu";

const TypeMenuBox = () => {
  return (
    <View style={{ marginLeft: 15, marginVertical: 25 }}>
      <TouchableOpacity>
        <Text style={{ fontSize: SIZES.h1, color: COLORS.white }}> Genres</Text>
      </TouchableOpacity>
      <TypeMenu iconName={"typewriter"} bookType="Romans et littératures" />
      <TypeMenu iconName={"smoking-pipe"} bookType="Policier et suspenses" />
      <TypeMenu iconName={"candle"} bookType="Religion et spiritualité" />
      <TypeMenu iconName={"flower-poppy"} bookType="Romance" />
      <TypeMenu iconName={"lightbulb"} bookType="BD et livre jeunesse " />
      <TypeMenu iconName={"menu"} bookType="Tous les genres" />
    </View>
  );
};

export default TypeMenuBox;
