import React from "react";
import { Avatar, Drawer as PaperDrawer, Text } from "react-native-paper";
import { View } from "react-native";
import stylesDraw from "@/constants/stylesDraw";

const CustomDrawerContent = (props: any) => {
  return (
    <View style={{ flex: 1 }}>
      <PaperDrawer.Section style={{ backgroundColor: "#3A98FF" }}>
        <View style={stylesDraw.avatarContainer}>
          <Avatar.Image
            size={80}
            source={{ uri: "../assets/images/Logo.png" }}
          />
          <Text style={stylesDraw.userName}>User Name</Text>
          <Text style={stylesDraw.userEmail}>user.email@example.com</Text>
        </View>
      </PaperDrawer.Section>
      <PaperDrawer.Section>
        <PaperDrawer.Item
          label="Contador"
          onPress={() => props.navigation.navigate("contador")}
        />
        <PaperDrawer.Item
          label="Primeira Pagina"
          onPress={() => props.navigation.navigate("Primeiro")}
        />
        <PaperDrawer.Item
          label="Tabs"
          onPress={() => props.navigation.navigate("tabs")}
        />
      </PaperDrawer.Section>
    </View>
  );
};

export default CustomDrawerContent;
