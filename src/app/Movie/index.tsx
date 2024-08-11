import { View } from "react-native";
import { styles } from "./style";
import Cover from "@/components/Cover";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Sections } from "../Sections";
import { Details } from "../Details";

const { Navigator, Screen } = createMaterialTopTabNavigator();

export function Movie() {
  return (
    <View style={styles.container}>
      <Cover />
      <NavigationContainer>
        <Navigator
          screenOptions={{
            tabBarActiveTintColor: "#FE7300",
            tabBarInactiveTintColor: "#0496f5",
            tabBarLabelStyle: {
              fontSize: 18,
              fontWeight: "bold",
              paddingVertical: 6,
              textTransform: "capitalize",
            },
            tabBarIndicatorContainerStyle: {
              backgroundColor: "#191919",
            },
            tabBarIndicatorStyle: {
              backgroundColor: '#FE7300',
              height: 2
            }
          }}
        >
          <Screen name="Sessões" component={Sections} />
          <Screen name="Detalhes" component={Details} />
        </Navigator>
      </NavigationContainer>
    </View>
  );
}
