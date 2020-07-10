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
} from "react-native";
import { ProgressCircle } from "react-native-svg-charts";
import ActiveTime from "../cardcomponents/ActiveTime";
import Exercise from "../cardcomponents/Exercise";
import Food from "../cardcomponents/Food";
import Weight from "../cardcomponents/Weight";
import Sleep from "../cardcomponents/Sleep";
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
        if (!result) {
          alert("You dont have sensor required to run this application !!");
        }
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
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 15,
                color: "#4A4A4A",
                fontFamily: "avenirNextRegular",
                fontWeight: "900",
              }}
            >
              Fitness
            </Text>
            <Text
              style={{
                fontSize: 25,
                color: "#4A4A4A",
                fontFamily: "avenirNextRegular",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              Tracker
            </Text>
          </View>
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
            <ActiveTime />
            <Exercise />
            <Food />
            <Weight />
            <Sleep />
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DEDEDE",
    paddingBottom: 40,
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
});
export default mainscreen;
