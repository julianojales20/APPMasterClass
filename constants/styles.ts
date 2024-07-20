import { Platform, StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  centralizado: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  headerStyle: {
    backgroundColor: "#006599",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    height: Platform.OS === "android" ? 70 + StatusBar.currentHeight : 70
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 70
  },
  logo: {
    height: "100%",
    width: 187
  },
  footer: {
    backgroundColor: "#006599",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0
  }
});

export default styles;
