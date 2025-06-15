import { StyleSheet, Image, Pressable, Text, View } from "react-native";
import { Category } from "../types/Category";
import { Link, router } from "expo-router";

type Props = {
  category: Category;
};

export const CategoryItem = ({ category }: Props) => {
  const handlePress = (categoryId: number) => {
    router.push(`/categories/${category.id}`);
  };

  return (
    <Pressable
      style={styles.container}
      onPress={() => handlePress(category.id)}
    >
      <Image
        source={{ uri: category.cover }}
        resizeMode="cover"
        style={styles.img}
      />
      <View style={styles.bg}></View>
      <View style={styles.box}>
        <Text style={styles.title}>{category.title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  img: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  categoryButton: {
    marginBottom: 20,
  },
  bg: {
    height: 150,
    backgroundColor: "black",
    opacity: 0.4,
    borderRadius: 10,
    marginTop: -150,
  },
  box: {
    height: 150,
    marginTop: -150,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 28,
  },
});
