import { View } from "react-native";
import { styles } from "./style";
import Cover from "@/components/Cover";

export function Movie() {
  return (
    <View style={styles.container}>
      <Cover />
    </View>
  );
}
