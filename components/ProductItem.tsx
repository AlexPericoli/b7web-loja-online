import { StyleSheet, Image, Pressable, Text, View } from "react-native";
import { Product } from "../types/Product";
import { Link, router } from "expo-router";

type Props = {
  product: Product;
};

export const ProductItem = ({ product }: Props) => {
  const handlePress = (productId: number) => {
    router.push(`/product/${productId}`);
  };

  return (
    <View style={styles.productButton}>
      <Link href="">
        <Pressable
          style={styles.container}
          onPress={() => handlePress(product.id)}
        >
          <Image
            source={{ uri: product.image }}
            resizeMode="cover"
            style={styles.img}
          />
          <View style={styles.info}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
          </View>
        </Pressable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingVertical: 10,
    marginBottom: 20,
    flexDirection: "row",
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: "#ccc",
  },
  productButton: {
    marginBottom: 20,
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 13,
    color: "#555",
    marginBottom: 10,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "right",
  },
});
