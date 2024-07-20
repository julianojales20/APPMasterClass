import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import styles from "@/constants/styles";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CustomDrawerContent from "@/components/CustomDrawerContent";

const logo = require("../assets/images/Logo.png");

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          screenOptions={{
            headerShown: true,
            headerStyle: [styles.centralizado, styles.headerStyle],
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              color: "#fff"
            },
            headerTitle: () => <Header />
          }}
        >
          <Drawer.Screen
            name="index"
            options={{
              drawerLabel: "Início",
              title: "Bem vindo!",
              drawerIcon: () => (
                <Ionicons name="home-outline" size={18} color="#3A98FF" />
              )
            }}
          />
          <Drawer.Screen
            name="Primeiro"
            options={{
              drawerLabel: "Primeiro",
              title: "Tela Primeira!",
              drawerIcon: () => (
                <Ionicons
                  name="heart-circle-outline"
                  size={18}
                  color="#3A98FF"
                />
              )
            }}
          />
          <Drawer.Screen
            name="contador"
            options={{
              drawerLabel: "Contador",
              title: "Contador",
              drawerIcon: () => (
                <Ionicons name="add" size={18} color="#3A98FF" />
              )
            }}
          />
          <Drawer.Screen
            name="tabs"
            options={{
              drawerLabel: "Tabs",
              title: "Tabs",
              drawerIcon: () => (
                <Ionicons name="albums-outline" size={18} color="#3A98FF" />
              )
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
      <Footer />
    </View>
  );
}
