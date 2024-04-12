import { ScrollView, StyleSheet, Text, View } from "react-native";
import { styles } from "./src/Styles/styles";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <ScrollView horizontal={false}>
        <View style={styles.cont}></View>
        <View style={[styles.body, { backgroundColor: "green" }]}> </View>
        <View style={[styles.body, { backgroundColor: "blue" }]}> </View>
        <View style={[styles.body, { backgroundColor: "orange" }]}> </View>
        <View style={[styles.body, { backgroundColor: "purple" }]}> </View>
      </ScrollView>
      <View style={styles.header}></View>
    </View>
  );
}
