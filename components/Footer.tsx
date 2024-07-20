import { View, Text } from "react-native";
import styles from "@/constants/styles";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text
        style={{
          color: "#fff",
          fontSize: 14,
          fontWeight: 700
        }}
      >
        {" "}
        Policia Militar do Estado de São Paulo.
      </Text>
      <Text
        style={{
          color: "#fff",
          fontSize: 14,
          fontWeight: 700
        }}
      >
        {" "}
        RDO - 2022
      </Text>
    </View>
  );
}
