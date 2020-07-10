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

const Weight = () => {
  return (
    <View style={styles.activitiesCard}>
      <View style={{ marginHorizontal: 20 }}>
        <View
          style={{
            marginTop: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <IconFa name="weight" size={20} color={"#EEC914"} />
            <Text
              style={{
                fontSize: 15,
                color: "#4A4A4A",
                fontFamily: "avenirNextMedium",
                left: 10,
              }}
            >
              Weight
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
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
                fontSize: 40,
                fontWeight: "bold",
                color: "#4A4A4A",
                fontFamily: "avenirNextCondensedDemiBold",
              }}
            >
              --
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
              kg
            </Text>
          </View>
          <TouchableOpacity
            style={{
              marginTop: 15,
            }}
          >
            <View
              style={{
                borderColor: "#4A4A4A",
                borderWidth: 1,
                height: 25,
                paddingHorizontal: 10,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
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
                Record
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Weight;

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
