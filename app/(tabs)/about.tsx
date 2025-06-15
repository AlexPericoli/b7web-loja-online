import { StyleSheet, View, Text } from "react-native";

export default function Screen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.h1}>Alexandre Marian</Text>
        <Text style={styles.subTitle}>Desenvolvedor Frontend</Text>
        <Text style={styles.h2}>
          React | React Native | NextJS | Typescript
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7e9eae",
  },
  card: {
    width: "92%",
    borderRadius: 10,
    paddingTop: 12,
    paddingLeft: 18,
    paddingBottom: 26,
    backgroundColor: "#eed",
  },
  h1: {
    color: "#444",
    fontSize: 31,
    fontWeight: "semibold",
  },
  subTitle: {
    color: "#444",
    fontSize: 18,
    marginTop: -9,
    marginBottom: 31,
  },
  h2: { fontSize: 17 },
});
