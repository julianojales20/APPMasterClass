import styles from "@/constants/styles";
import { useState } from "react";
import { View, Text } from "react-native";
import Botao from "@/components/Botao";
import { Ionicons } from "@expo/vector-icons";

export interface ContadorProps {
  valorInicial?: number;
}

export default function Contador(props: ContadorProps) {
  const [numero, setNumero] = useState(props.valorInicial ?? 0);

  return (
    <View style={styles.centralizado}>
      <Text style={{ fontSize: 50 }}>Numero: {numero}</Text>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Botao onPress={() => setNumero(numero + 1)}>
          <Ionicons name="add" color="white" size={24} />
        </Botao>
        <Botao onPress={() => setNumero(numero - 1)}>
          <Ionicons name="remove" color="white" size={24} />
        </Botao>
      </View>
    </View>
  );
}
