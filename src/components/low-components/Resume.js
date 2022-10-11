import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, SIZES } from "constants";

const Resume = ({ text }) => {
  const [showMoreButton, setShowMoreButton] = useState(true);
  const [textShown, setTextShown] = useState(false);
  const [numLines, setNumLines] = useState(undefined);

  const toggleTextShown = () => {
    setTextShown(!textShown);
  };
  useEffect(() => {
    setNumLines(textShown ? undefined : 5);
  }, [textShown]);

  const onTextLayout = useCallback(
    (e) => {
      if (e.nativeEvent.lines.length > 5 && !textShown) {
        setShowMoreButton(true);
        setNumLines(5);
      }
    },
    [textShown]
  );

  return (
    <View style={styles.container}>
      <Text
        style={[styles.readMoreStyle, { paddingTop: 15, fontWeight: "500" }]}
      >
        Résumé
      </Text>
      <Text
        onTextLayout={onTextLayout}
        numberOfLines={numLines}
        style={styles.textStyle}
        ellipsizeMode="tail"
      >
        {text}
      </Text>

      {showMoreButton ? (
        <Text onPress={toggleTextShown} style={styles.readMoreStyle}>
          {textShown ? "Moins" : "Plus"}
        </Text>
      ) : null}
    </View>
  );
};

export default Resume;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  textStyle: {
    textAlign: "justify",
    fontSize: SIZES.body3,
    color: COLORS.white,
  },
  readMoreStyle: {
    fontSize: SIZES.body2,
    fontWeight: "bold",
    color: COLORS.white,
  },
});
