import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import IconFa from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native-gesture-handler";
const Exercise = () => {
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
            <IconFa name="running" size={20} color={"#5CDE1A"} />
            <Text
              style={{
                fontSize: 15,
                color: "#4A4A4A",
                fontFamily: "avenirNextMedium",
                left: 10,
              }}
            >
              Exercise
            </Text>
          </View>
          <TouchableOpacity>
            <View
              style={{
                borderColor: "#4A4A4A",
                borderWidth: 1,
                height: 25,
                width: 80,
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
                Start
              </Text>
              <Icon name="ios-arrow-dropright" size={20} />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 20,
            borderColor: "white",
            borderWidth: 1,
            borderRadius: 20,
            backgroundColor: "#d3d3d3",
          }}
        >
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: "#4A4A4A",
                  fontFamily: "avenirNextCondensedRegular",
                }}
              >
                Running
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: "#4A4A4A",
                  fontFamily: "avenirNextCondensedRegular",
                  marginLeft: 10,
                  marginTop: 5,
                }}
              >
                00:00:14
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{ justifyContent: "center", alignSelf: "center" }}>
            <Text
              style={{
                fontSize: 10,
                color: "black",
                fontFamily: "avenirNextCondensedRegular",
              }}
            >
              |
            </Text>
          </View>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 15,
                color: "#4A4A4A",
                fontFamily: "avenirNextCondensedRegular",
                // right: 5,
              }}
            >
              Recent Workout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Exercise;

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
