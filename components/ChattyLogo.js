import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { ThemeContext } from "../context/ThemeContext";

export default function ChattyLogo({ compact = false }) {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.mark,
          compact && styles.markCompact,
          {
            backgroundColor: theme.primary,
            borderColor: theme.highlight,
          },
        ]}
      >
        <Ionicons
          name="chatbubbles"
          size={compact ? 28 : 34}
          color="#FFFFFF"
        />
      </View>
      <Text
        style={[
          styles.wordmark,
          compact && styles.wordmarkCompact,
          { color: theme.text },
        ]}
      >
        Chatty
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  mark: {
    width: 72,
    height: 72,
    borderRadius: 24,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  markCompact: {
    width: 58,
    height: 58,
    borderRadius: 19,
  },
  wordmark: {
    fontSize: 34,
    fontWeight: "800",
    letterSpacing: 1,
  },
  wordmarkCompact: {
    fontSize: 30,
  },
});
