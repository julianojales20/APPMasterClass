import { View, Text, Image, Button } from "react-native";
import styles from "@/constants/styles";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { useState } from "react";

const logo = require("../assets/images/Logo.png");

export default function Header() {
  const nav = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContainer}>
        <Image source={logo} style={styles.logo} resizeMode="cover" />
      </View>
    </View>
  );
}
