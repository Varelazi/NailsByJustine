import React, { useEffect } from "react";
import { ScrollView, View, StyleSheet, StatusBar, Platform, Image } from "react-native";

export default function Index() {
  useEffect(() => {
    StatusBar.setBarStyle("light-content");
    StatusBar.setBackgroundColor("black");
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollView} style={styles.container} showsVerticalScrollIndicator={false} >
      <View style={styles.content}>
        <Image source={require('../assets/images/user.png')} style={styles.image} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    borderColor: "red",
    borderWidth: 3,
  },
  scrollView: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, 
  },
  content: {
    flexGrow: 1, 
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 180,
    height: 180,
    borderColor: 'yellow',
    borderWidth: 3,
    margin: 30
  }
});
