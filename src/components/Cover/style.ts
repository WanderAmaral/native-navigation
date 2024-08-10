import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  gradiant: {
    justifyContent: "flex-end",
    flex: 1,
    padding: 24,
    gap: 2
  },
  classification: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "#940309",
    width: 32,
    height: 32,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 4
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  type: {
    color: "#C4C4C4",
    fontSize: 16,
  },
  duration: {
    color: "#fff",
    fontSize: 16,
    marginTop: 16,
  },
});
