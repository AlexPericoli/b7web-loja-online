import { FlatList, Text, View, StyleSheet } from "react-native";
import { Category } from "../../../types/Category";
import { getCategories } from "../../../services/category";
import { CategoryItem } from "../../../components/CategoryItem";

export default function Screen() {
  const categories: Category[] | undefined = getCategories();

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryItem category={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
  },
  list: {
    flex: 1,
    width: "100%",
  },
});
