import React from "react";
import { Pedometer } from "expo-sensors";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Animated,
  Alert,
} from "react-native";
import { ProgressCircle } from "react-native-svg-charts";
import * as Progress from "react-native-progress";
import Icon from "react-native-vector-icons/Ionicons";
import IconFa from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native-gesture-handler";
import ActiveTime from "../cardcomponents/ActiveTime";
import ExerciseCard from "../cardcomponents/Exercise";
import FoodCard from "../cardcomponents/Food";

const Sleep = () => {
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
            <Icon name="ios-cloudy-night" size={25} color={"#8553C6"} />
            <Text
              style={{
                fontSize: 15,
                color: "#4A4A4A",
                fontFamily: "avenirNextMedium",
                left: 10,
              }}
            >
              Sleep
            </Text>
          </View>
          <TouchableOpacity>
            <Icon name="ios-checkmark-circle-outline" size={25} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              // marginHorizontal: 20,
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
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 25,
                    color: "#4A4A4A",
                    fontFamily: "avenirNextCondensedDemiBold",
                  }}
                >
                  7
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
                  hrs
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 25,
                    color: "#4A4A4A",
                    fontFamily: "avenirNextCondensedDemiBold",
                    marginLeft: 5,
                  }}
                >
                  30
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
                  min
                </Text>
              </View>
            </View>
          </View>
          <Progress.Bar
            progress={0.3}
            width={100}
            height={10}
            color={"#8553C6"}
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

export default Sleep;

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
