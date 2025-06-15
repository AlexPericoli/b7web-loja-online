import { router, Stack, useLocalSearchParams } from "expo-router";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getProductById } from "../../services/product";
import { getCategoryById } from "../../services/category";
import { Button } from "../../components/Button";

export default function () {
  const handleBuyButton = () => {
    alert("Você está comprando o item " + product?.title);
    return 0;
  };

  const { id } = useLocalSearchParams();

  let category;
  const idProduct = parseInt(id as string);
  const product = getProductById(idProduct);

  if (product) {
    category = getCategoryById(product?.idCategory);
  }

  if (!product) return router.back();

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: product.title }} />

      <ScrollView style={styles.area}>
        <Image
          source={{ uri: product.image }}
          style={styles.productImg}
          resizeMode="cover"
        />
        <Text style={styles.productTitle}>{product.title}</Text>
        <Text style={styles.productCat}>{category?.title}</Text>
        <Text style={styles.productDesc}>{product.description}</Text>
        <View style={styles.priceArea}>
          <Text style={styles.productPrice}>R$ {product.price.toFixed(2)}</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonArea}>
        <Button title="Comprar agora" onPress={handleBuyButton} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  area: {
    flex: 1,
    padding: 10,
  },
  buttonArea: {
    padding: 10,
    paddingBottom: 30,
  },
  productImg: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
  productTitle: {
    fontSize: 25,
    fontWeight: "600",
    marginTop: 12,
  },
  productCat: { marginTop: -8 },
  productDesc: { fontSize: 16, marginTop: 9 },
  priceArea: {
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#ccc",
  },
  productPrice: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});
