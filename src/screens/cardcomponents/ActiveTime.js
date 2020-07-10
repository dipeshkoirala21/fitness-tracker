import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const ActiveTime = () => {
  return (
    <View style={styles.activitiesCard}>
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          marginTop: 10,
        }}
      >
        <Icon name="md-timer" size={23} color={"#FF5733"} />
        <Text
          style={{
            fontSize: 15,
            color: "#4A4A4A",
            fontFamily: "avenirNextMedium",
            left: 10,
          }}
        >
          Active Time
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          marginTop: 10,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              color: "#4A4A4A",
              fontFamily: "avenirNextCondensedDemiBold",
            }}
          >
            18
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
            /60 mins
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
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
              1193
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
              cal
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                fontSize: 25,
                color: "#4A4A4A",
                fontFamily: "avenirNextCondensedDemiBold",
              }}
            >
              1.34
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
              km
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ActiveTime;

const styles = StyleSheet.create({
  activitiesCard: {
    flex: 1,
    height: 100,
    width: Dimensions.get("window").width - 30,
    backgroundColor: "#FFFFFF",
    borderColor: "#DEDEDE",
    borderRadius: 10,
    marginTop: 10,
    elevation: 2,
  },
});
