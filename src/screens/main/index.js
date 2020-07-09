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
} from "react-native";
import { ProgressCircle } from "react-native-svg-charts";
import Icon from "react-native-vector-icons/Ionicons";
import IconFa from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native-gesture-handler";

class mainscreen extends React.Component {
  constructor(props) {
    super(props);
    this.maxSteps = 6000;
    this.state = {
      isPedometerAvailable: "checking",
      pastStepCount: 0,
      currentStepCount: 0,
      cardPoint: false,
    };
  }

  componentDidMount() {
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount((result) => {
      this.setState({
        currentStepCount: result.steps,
      });
    });

    Pedometer.isAvailableAsync().then(
      (result) => {
        this.setState({
          isPedometerAvailable: String(result),
        });
      },
      (error) => {
        this.setState({
          isPedometerAvailable: "Could not get isPedometerAvailable: " + error,
        });
      }
    );

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      (result) => {
        this.setState({ pastStepCount: result.steps });
      },
      (error) => {
        this.setState({
          pastStepCount: "Could not get stepCount: " + error,
        });
      }
    );
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };
  handleScrollPosition = (event) => {
    if (event.nativeEvent.contentOffset.y > 10) {
      this.setState({ cardPoint: true });
    } else {
      this.setState({ cardPoint: false });
    }
  };
  render() {
    return (
      <SafeAreaView
        style={[
          styles.container,
          { backgroundColor: this.state.cardPoint ? "#ffffff" : "#DEDEDE" },
        ]}
      >
        <View
          style={[
            styles.heading,
            {
              backgroundColor: this.state.cardPoint ? "#ffffff" : "#DEDEDE",
              borderBottomColor: this.state.cardPoint ? "#D4D4D4" : "#DEDEDE",
            },
          ]}
        >
          <Text
            style={{
              fontSize: 20,
              color: "#4A4A4A",
              marginHorizontal: 16,
              fontFamily: "avenirNextRegular",
              textTransform: "uppercase",
              fontWeight: "800",
            }}
          >
            Fitness
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={this.handleScrollPosition}
        >
          <View style={styles.nestedContainer}>
            <View style={styles.stepsCard}>
              <ProgressCircle
                style={{ height: 150, width: 150 }}
                progress={this.state.currentStepCount / this.maxSteps}
                progressColor={"#8641F4"}
                strokeWidth={10}
              />
              <View
                style={{
                  position: "absolute",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 25,
                    color: "#4A4A4A",
                    fontFamily: "avenirNextCondensedDemiBold",
                  }}
                >
                  {this.state.currentStepCount - 1}
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    color: "#4A4A4A",
                    fontFamily: "avenirNextMedium",
                  }}
                >
                  /{this.maxSteps} Steps
                </Text>
              </View>
            </View>
            <View style={styles.activitiesCard}>
              <View
                style={{
                  marginHorizontal: 20,
                  flexDirection: "row",
                  marginTop: 10,
                }}
              >
                <Icon name="md-timer" size={23} color={"#8641F4"} />
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
                        borderRadius: 4,
                        flexDirection: "row",
                        justifyContent: "space-between",
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
                    borderColor: "lightgrey",
                    borderWidth: 1,
                    borderRadius: 5,
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
                  <View
                    style={{ justifyContent: "center", alignSelf: "center" }}
                  >
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
            <View style={styles.activitiesCard}></View>
            <View style={styles.activitiesCard}></View>
            <View style={styles.activitiesCard}></View>
            <Text>
              Pedometer.isAvailableAsync(): {this.state.isPedometerAvailable}
            </Text>
            <Text>
              Steps taken in the last 24 hours: {this.state.pastStepCount}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
  },
  heading: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#DEDEDE",
    height: 60,
    borderBottomWidth: 1,
  },
  nestedContainer: {
    // marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DEDEDE",
  },
  stepsCard: {
    height: 300,
    width: Dimensions.get("window").width - 30,
    backgroundColor: "#FFFFFF",
    borderColor: "#DEDEDE",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    elevation: 2,
  },
  activitiesCard: {
    height: 100,
    width: Dimensions.get("window").width - 30,
    backgroundColor: "#FFFFFF",
    borderColor: "#DEDEDE",
    borderRadius: 10,
    // justifyContent: "center",
    // alignItems: "center",
    marginTop: 10,
    elevation: 2,
  },
});
export default mainscreen;
