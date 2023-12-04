import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import app from "../../assets/Images/loginUi.jpg";
import Colors from "../Shared/Colors";
import SignInWithOAuth from "../Components/SignInWithOAuth";
export default function Login() {
  return (
    <View style={{ alignItems: "center" }}>
      <Image source={app} style={styles.appImage} />
      <View
        style={{
          backgroundColor: Colors.blue,
          padding: 25,
          alignItems: "center",
          marginTop: -120,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <Text style={styles.heading}>Your Ultimate Doctor</Text>
        <Text style={styles.heading}>Appointment Booking App</Text>
        <Text
          style={{ textAlign: "center", marginTop: 20, color: Colors.white }}
        >
          Book Appointment Effortlessly and Manage Your Health Journey
        </Text>

       <SignInWithOAuth/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  appImage: {
    width: 400,
    height: 700,
    objectFit: "contain",
    marginTop: 50,
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
  },
});
