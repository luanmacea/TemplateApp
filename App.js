import 'react-native-gesture-handler'

import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import Routes from "./src/routes";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Routes />
    </SafeAreaView>
  );
}
