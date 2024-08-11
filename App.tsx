import { StatusBar } from "expo-status-bar";
import { Movie } from "./src/app/Movie";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Movie />
    </>
  );
}
