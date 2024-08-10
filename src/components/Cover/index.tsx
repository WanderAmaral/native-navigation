import { ImageBackground, Text } from "react-native";
import { styles } from "./style";
import { LinearGradient } from "expo-linear-gradient";

export default function Cover() {
  return (
    <ImageBackground
      style={styles.image}
      source={require("@/assets/cover.jpg")}
      resizeMode="contain"
    >
      <LinearGradient
        colors={["rgba(0,0,0, 0.2)", "#000"]}
        style={styles.gradiant}
      >
        <Text style={styles.title}>Jhon Wick</Text>
      </LinearGradient>
    </ImageBackground>
  );
}
