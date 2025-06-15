import { Stack } from "expo-router";
import { View } from "react-native";

export default function CategoryLayout() {
  return (
    <Stack>
      <Stack.Screen name="list" options={{ title: "Categorias" }} />
      <Stack.Screen name="[id]" />
    </Stack>
  );
}
