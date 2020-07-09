import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import MainScreen from "./screens/main";
import Profile from "./screens/profile";

const Home = createStackNavigator({
  MainScreen: {
    screen: MainScreen,
    navigationOptions: () => {
      return {
        headerShown: false,
      };
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: () => {
      return {
        headerShown: false,
      };
    },
  },
});
const DashboardTabNavigator = createBottomTabNavigator(
  {
    Home,
    // Adding: {
    //   screen: () => null, // Empty screen
    //   navigationOptions: (props) => ({
    //     tabBarIcon: (
    //       <AddButton navigate={props.navigation.navigate} goback={'goback'} />
    //     ), // Plus button component
    //     tabBarLabel: () => null,
    //   }),
    // },
    Profile,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Home") {
          iconName = tintColor === "#8641F4" ? "ios-home" : "ios-home";
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          // IconComponent = HomeIconWithBadge;
        } else if (routeName === "Profile") {
          iconName = tintColor === "#8641F4" ? "ios-person" : "ios-person";
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
      // statusBarOptions: { hidden: false, backgroundColor: "red" },
    }),
    tabBarOptions: {
      labelStyle: {
        fontSize: 10,
        paddingBottom: 4,
        textTransform: "uppercase",
        fontFamily: "avenirNextRegular",
        fontWeight: "bold",
      },
      activeTintColor: "#8641F4",
      inactiveTintColor: "grey",
      style: {
        backgroundColor: "#FFFFFF",
        height: 50,
        borderTopWidth: 1,
        borderTopColor: "#DEDEDE",
      },
    },
  }
);
export const AppContainer = createAppContainer(DashboardTabNavigator);
