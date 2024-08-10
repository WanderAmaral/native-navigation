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
        <Text style={styles.classification}>18</Text>
        <Text style={styles.title}>Jhon Wick</Text>
        <Text style={styles.type}>Ação, Aventura, Violência extrema</Text>
        <Text style={styles.duration}>03 horas e 5 minutos</Text>
      </LinearGradient>
    </ImageBackground>
  );
}
