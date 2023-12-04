import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import SubHeading from "./SubHeading";
import GlobalApi from "../../Services/GlobalApi";
import HospitalItem from "./HospitalItem";
import { useNavigation } from "@react-navigation/native";

export default function PremiumDoctors() {
  // const [hospitalList,setHospitalList]=useState([]);
  const hospitalList = [
    {
      id: 1,
      Name: "Practo Care Surgeries",
      Address: "Jadavpur, Kolkata",
      imageUrl:
        "https://images1-fabric.practo.com/doctor/1054479/dr-subrata-nag-642ea39f5d675.png",
    },
    {
      id: 2,
      Name: "Teeth Care Dental Clinic",
      Address: "Rajarhat, Kolkata",
      imageUrl:
        "https://images1-fabric.practo.com/practices/832458/teeth-care-multispeciality-dental-clinic-kolkata-5a4cb02245358.jpg",
    },
    {
      id: 3,
      Name: "Aloka Medicare Pvt. Ltd.",
      Address: "Sarat Bose Road",
      imageUrl:
        "https://cdn.hexahealth.com/Image/031eea66-14cf-4200-9354-2d857c4b1bad.jpg",
    },
    {
      id: 4,
      Name: "The Eye Clinic",
      Address: "Kankurgachi",
      imageUrl:
        "https://swatiagarwal.in/images/2.jpg",
    },
  ];

  // const navigation=useNavigation();
  // useEffect(()=>{
  //     getPremiumHospitals()
  // },[])
  // const getPremiumHospitals=()=>{
  //     GlobalApi.getPremiumHospitals().then(resp=>{
  //         setHospitalList(resp.data.data)
  //     })
  // }
  return (
    hospitalList && (
      <View style={{ marginTop: 10,marginBottom:15 }}>
        <SubHeading subHeadingTitle={"Famous Doctors"} />
        <FlatList
          data={hospitalList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("hospital-detail", {
                  hospital: item,
                })
              }
            >
              <HospitalItem hospital={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    )
  );
}
