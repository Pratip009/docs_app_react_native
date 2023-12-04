import { View, TouchableOpacity, Text, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Services/GlobalApi";
import Colors from "../../Shared/Colors";
import SubHeading from "./SubHeading";
import { useNavigation } from "@react-navigation/native";

export default function Categories() {
  const navigation = useNavigation();
  //   const [categoryList, setCategoryList] = useState([]);

  const categoryList = [
    {
      id: 1,
      name: "Dentist",
      imageUrl:
        "https://img.freepik.com/free-photo/doctor-with-face-mask-against-covid19-discussing-with-nurse-hospital-waiting-area-disabled-senior-woman-wheelchair-waiting-examination-assistant-working-reception-computer_482257-6055.jpg?w=1060&t=st=1701418819~exp=1701419419~hmac=9eb35a0e0249e1728521a1b6fb07e875c3d320dacf71bb519bfac7be6e3e33b4",
    },
    {
      id: 2,
      name: "Cardiologist",
      imageUrl:
        "https://img.freepik.com/free-photo/beds-medical-equipment-stand-out-with-soothing-blue-tones-hospital-room_157027-3248.jpg?t=st=1701414651~exp=1701418251~hmac=04305513e0513dbf7f48ec5ef345bb5e0bb126e6412588f0b810532aceeab661&w=1060",
    },
    {
      id: 3,
      name: "Neurologist",
      imageUrl:
        "https://img.freepik.com/free-photo/confident-female-doctor-with-reports-clipboard-standing-against-male-patient-hospital_662251-3027.jpg?w=996&t=st=1701505169~exp=1701505769~hmac=daa42cd6599ec47161d3f61a7beb819167af1354acc19f17df1cc81f861c7c88",
    },
    {
      id: 4,
      name: "Orthopedic",
      imageUrl:
        "https://img.freepik.com/free-photo/medical-examination-report-stethoscope-white-desktop_1387-442.jpg?w=996&t=st=1701505228~exp=1701505828~hmac=8023b0b061f292d366a91c97de2ec79a468c2604dceea0dd6267fa3baecee523",
    },
    {
      id: 5,
      name: "Otology",
      imageUrl:
        "https://img.freepik.com/free-photo/modern-hospital-machinery-illuminates-blue-mri-scanner-generated-by-ai_188544-44420.jpg?t=st=1701494645~exp=1701498245~hmac=05f7a48056d7156ac0539ee533a666dbfe18daea28add56c21057dc2cb05d832&w=1060",
    },
  ];
  // useEffect(() => {
  //     getCategories();
  // }, [])
  // const getCategories = () => {
  //     GlobalApi.getCategories().then(resp => {

  //         setCategoryList(resp.data.data)
  //     })
  // }

  if (!categoryList) {
    return null;
  }
  return (
    <View style={{ marginTop: 10 }}>
      <SubHeading subHeadingTitle={"Doctor Sepciality"} />

      <FlatList
        data={categoryList}
        numColumns={6}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: "space-between",
        }}
        renderItem={({ item, index }) =>
          index < 6 && (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("hospital-doctor-list-screen", {
                  categoryName: item.attributes.Name,
                })
              }
              style={{ alignItems: "center" }}
            >
              <View
                style={{
                  backgroundColor: Colors.lightBlue,
                  padding: 15,
                  borderRadius: 99,
                }}
              >
                <Image
                  source={{
                    uri: item.imageUrl,
                  }}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 99,
                  }}
                />
              </View>
              <Text style={{fontSize:11, fontFamily:'appfont'}}>{item.name}</Text>
            </TouchableOpacity>
          )
        }
      />
    </View>
  );
}
