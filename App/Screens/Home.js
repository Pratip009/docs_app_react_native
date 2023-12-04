import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  
} from "react-native";
import React from "react";
import { useAuth } from "@clerk/clerk-expo";
import Header from "../Components/Home/Header";
import SearchBar from "../Components/Home/SearchBar";
import Slider from "../Components/Home/Slider";
import Category from "../Components/Home/Category";
import PremiumHospitals from "../Components/Home/PremiumHospitals";
import PremiumClinic from "../Components/Home/PremiumClinic";
import PremiumDoctors from "../Components/Home/PremiumDoctors";

const Home = () => {
  const { isLoaded, signOut } = useAuth();

  return (
    <ScrollView style={{ padding: 20, paddingTop: 10, marginTop: 10 }}>
      <Header />
      <SearchBar setSearchText={(value) => console.log(value)} />
      <Slider />
      <Category />
      <PremiumHospitals />
      <PremiumClinic />
      <PremiumDoctors/>

      {/* <Button title="SignOut" onPress={() => signOut()}></Button> */}
      {/* <Text>Home</Text> */}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
