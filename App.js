import { ScrollView, StyleSheet, Text, View } from "react-native";
import { styles } from "./src/Styles/styles";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <ScrollView horizontal={false}>
        <ScrollView horizontal={true}>
          <View style={styles.cont}>
            <View style={[styles.body, { backgroundColor: "green" }]}> </View>
            <View style={[styles.body, { backgroundColor: "blue" }]}> </View>
            <View style={[styles.body, { backgroundColor: "orange" }]}> </View>
            <View style={[styles.body, { backgroundColor: "purple" }]}> </View>
          </View>
        </ScrollView>
        <View style={styles.cont2}>
          <View style={[styles.body2, { backgroundColor: "white" }]}>
            <Text>ola </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.header}></View>
    </View>
  );
}
