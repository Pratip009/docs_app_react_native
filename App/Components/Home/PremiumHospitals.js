import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import SubHeading from "./SubHeading";
import GlobalApi from "../../Services/GlobalApi";
import HospitalItem from "./HospitalItem";
import { useNavigation } from "@react-navigation/native";

export default function PremiumHospitals() {
  // const [hospitalList,setHospitalList]=useState([]);
  const hospitalList = [
    {
      id: 1,
      Name: "Medica Superspecialty Hospital",
      Address: "Mukundapur, Kolkata",
      imageUrl:
        "https://yugyugjiyo.com/resources/uploads/hospital/10011/gallery/medica-superspecialty-hospital_banner.jpg",
    },
    {
      id: 2,
      Name: "Sterling Hospital",
      Address: "Bhupen Bose Avenue Shyambazar, Kolkata",
      imageUrl:
        "https://sys.mediflam.com/OfflineUploads/HospitalImage/Sterling_Hospital.JPG",
    },
    {
      id: 3,
      Name: "AMRI Hospital",
      Address: "Saltlake City, Sector 5, Kolkata",
      imageUrl:
        "https://img.etimg.com/thumb/width-1200,height-900,imgsize-87482,resizemode-75,msid-103815942/industry/healthcare/biotech/healthcare/manipal-completes-kolkatas-amri-hospitals-acquisition.jpg",
    },
    {
        id: 4,
        Name: "Phoenix Hospital and Diagnostic Centre",
        Address: "Rajbari colony, Kolkata",
        imageUrl:
          "https://content3.jdmagicbox.com/comp/kolkata/c8/033pxx33.xx33.001036629395.c8c8/catalogue/phoenix-hospital-and-diagnostic-centre-pvt-ltd-rajbari-colony-kolkata-hospitals-xzth6aeurb.jpg?clr=1f3d47",
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
      <View style={{ marginTop: 10 }}>
        <SubHeading subHeadingTitle={"Our Premium Hospitals"} />
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
