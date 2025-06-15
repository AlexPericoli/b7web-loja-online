import { Image, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/Button";
import { router } from "expo-router";

export default function Screen() {
  const handleStart = () => {
    router.replace("/home");
    return 0;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        style={styles.logo}
        resizeMode="cover"
      />
      <Text style={styles.h1}>Alex Shop Prime</Text>
      <Text style={styles.h2}>Aqui você encontra tudo e mais um pouco</Text>
      <Button title="Começar as compras" onPress={handleStart} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  h1: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  h2: {
    fontSize: 16,
    marginBottom: 10,
  },
});
