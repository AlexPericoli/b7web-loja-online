import { FlatList, View, StyleSheet } from "react-native";
import { Product } from "../../types/Product";
import { getProducts } from "../../services/product";
import { ProductItem } from "../../components/ProductItem";

export default function Screen() {
  const products: Product[] | undefined = getProducts();

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem product={item} />}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    width: "100%",
    padding: 20,
  },
});
