import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import * as Progress from "react-native-progress";
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
const Food = () => {
  return (
    <View style={styles.activitiesCard}>
      <View style={{ marginHorizontal: 20 }}>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Icon name="ios-restaurant" size={25} color={"#09C6B9"} />
            <Text
              style={{
                fontSize: 15,
                color: "#4A4A4A",
                fontFamily: "avenirNextMedium",
                left: 10,
              }}
            >
              Food
            </Text>
          </View>
          <TouchableOpacity>
            <View
              style={{
                borderColor: "#4A4A4A",
                borderWidth: 1,
                height: 25,
                width: 70,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: "#4A4A4A",
                  fontFamily: "avenirNextMedium",
                  left: 5,
                }}
              >
                Add
              </Text>
              <Icon name="ios-add-circle-outline" size={20} />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginRight: 20,
            }}
          >
            <Text
              style={{
                fontSize: 25,
                color: "#4A4A4A",
                fontFamily: "avenirNextCondensedDemiBold",
              }}
            >
              0
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "#4A4A4A",
                fontFamily: "avenirNextCondensedDemiBold",
                marginTop: 15,
                marginLeft: 5,
              }}
            >
              / 2150 cal
            </Text>
          </View>
          <Progress.Bar
            progress={0.3}
            width={100}
            height={10}
            color={"#09C6B9"}
            style={{
              alignSelf: "flex-end",
              bottom: 15,
            }}
            unfilledColor={"#DEDEDE"}
            borderColor={"#FFFFFF"}
          />
        </View>
      </View>
    </View>
  );
};

export default Food;

const styles = StyleSheet.create({
  activitiesCard: {
    height: 100,
    width: Dimensions.get("window").width - 30,
    backgroundColor: "#FFFFFF",
    borderColor: "#DEDEDE",
    borderRadius: 10,
    marginTop: 10,
    elevation: 2,
  },
});
