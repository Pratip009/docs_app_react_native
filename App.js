import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Login from "./App/Screens/Login";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import Home from "./App/Screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./App/Navigations/TabNavigation";
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'appfont': require('./assets/fonts/Outfit-Regular.ttf'),
    'appfontbold': require('./assets/fonts/Outfit-Bold.ttf'),
    'appfontsemibold': require('./assets/fonts/Outfit-SemiBold.ttf'),
    'appfontlight': require('./assets/fonts/Outfit-Light.ttf'),

  });
  if(!fontsLoaded){
    return null;
  }
  return (
    <ClerkProvider
      publishableKey={
        "pk_test_c3RpcnJlZC1zY29ycGlvbi00MC5jbGVyay5hY2NvdW50cy5kZXYk"
      }
    >
      <SafeAreaView style={styles.container}>
        <StatusBar hidden/>
        <SignedIn>
          <NavigationContainer>
            <TabNavigation/>
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
