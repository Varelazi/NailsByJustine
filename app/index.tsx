import React, { useEffect, useState } from "react";
import { ScrollView, View, StyleSheet, StatusBar, Platform, Image, Text } from "react-native";
import * as Font from 'expo-font'; 

export default function Index() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'LibreBaskerville': require('../assets/fonts/Libre_Baskerville/LibreBaskerville-Regular.ttf'), 
      });
      setFontsLoaded(true); 
    };
    

    loadFonts();
    StatusBar.setBarStyle("light-content");
    StatusBar.setBackgroundColor("black");
  }, []);

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollView} style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <Image source={require('../assets/images/BeautyByJustine.png')} style={styles.logo} />
        <Text style={styles.infoBar}> Please Read Policies Before Booking!</Text>
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
  logo: {
    width: 550,
    height: 190,
    marginTop: 20,
    marginBottom: 10,
  },
  infoBar: {
    borderColor: 'white',
    width: '100%',
    padding: 5,
    backgroundColor: 'white',
    textAlign: 'center',
    fontFamily: 'LibreBaskerville',
  }
});
