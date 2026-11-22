import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemeContext } from "../context/ThemeContext";

export default function ChatBackground({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.background },
      ]}
    >
      <View style={[styles.messageBubble, styles.incomingOne, { backgroundColor: theme.chatBubble }]}>
        <View style={[styles.messageLine, styles.lineWide, { backgroundColor: theme.chatBubbleDot }]} />
        <View style={[styles.messageLine, styles.lineShort, { backgroundColor: theme.chatBubbleDot }]} />
      </View>

      <View style={[styles.messageBubble, styles.outgoingOne, { backgroundColor: theme.chatBubble }]}>
        <View style={[styles.messageLine, styles.lineMedium, { backgroundColor: theme.chatBubbleDot }]} />
      </View>

      <View style={[styles.messageBubble, styles.incomingTwo, { backgroundColor: theme.chatBubble }]}>
        <View style={[styles.messageLine, styles.lineMedium, { backgroundColor: theme.chatBubbleDot }]} />
        <View style={[styles.messageLine, styles.lineShort, { backgroundColor: theme.chatBubbleDot }]} />
      </View>

      <View style={[styles.messageBubble, styles.outgoingTwo, { backgroundColor: theme.chatBubble }]}>
        <View style={[styles.typingDot, { backgroundColor: theme.chatBubbleDot }]} />
        <View style={[styles.typingDot, { backgroundColor: theme.chatBubbleDot }]} />
        <View style={[styles.typingDot, { backgroundColor: theme.chatBubbleDot }]} />
      </View>

      <View style={[styles.messageBubble, styles.incomingThree, { backgroundColor: theme.chatBubble }]}>
        <View style={[styles.messageLine, styles.lineWide, { backgroundColor: theme.chatBubbleDot }]} />
      </View>

      <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
        {children}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
  },
  messageBubble: {
    position: "absolute",
    borderRadius: 18,
    paddingHorizontal: 16,
    justifyContent: "center",
    gap: 7,
  },
  incomingOne: {
    width: 160,
    height: 64,
    top: 95,
    left: -52,
  },
  outgoingOne: {
    width: 128,
    height: 48,
    top: 190,
    right: -30,
  },
  incomingTwo: {
    width: 145,
    height: 68,
    top: 330,
    left: -48,
  },
  outgoingTwo: {
    width: 110,
    height: 52,
    right: -22,
    bottom: 150,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
  },
  incomingThree: {
    width: 150,
    height: 50,
    left: -56,
    bottom: 45,
  },
  messageLine: {
    height: 7,
    borderRadius: 4,
  },
  lineWide: {
    width: 82,
  },
  lineMedium: {
    width: 64,
  },
  lineShort: {
    width: 42,
  },
  typingDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
});
