import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
  NavigationScreenProps
} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/HomeScreen";
import MenuScreen from "../screens/MenuScreen";
import ViewSeedScreen from "../screens/ViewSeedScreen";
import WalletDetailScreen from "../screens/WalletDetailScreen";
import ReceiveScreen from "../screens/ReceiveScreen";
import LogoutScreen from "../screens/LogoutScreen";
import ContactUsScreen from "../screens/ContactUsScreen";
import SelectCurrencyScreen from "../screens/SelectCurrencyScreen";
import SelectLanguagesScreen from "../screens/SelectLanguagesScreen";
import RequestScreen from "../screens/RequestScreen";
import FAQScreen from "../screens/FAQScreen";
import KeySweepScreen from "../screens/KeySweepScreen";

import { ViewTermsOfUseScreen } from "../screens/TermsOfUseScreen";
import { ViewPrivacyNoticeScreen } from "../screens/PrivacyNoticeScreen";

import SendStack from "./SendStack";

import { spaceBadger as theme } from "../themes/spaceBadger";

import lang from "../_locales/index";
var tran = new lang("MainTabNavigator");

const HomeStack = createStackNavigator(
  {
    WalletDashboard: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    },
    WalletDetailScreen: {
      screen: WalletDetailScreen,
      navigationOptions: (props: NavigationScreenProps) => {
        const title = props.navigation?.state?.params?.symbol;
        return {
          title: `$${title}`
        };
      }
    },
    RequestSetup: {
      screen: RequestScreen,
      navigationOptions: {
        title: tran.getStr("Request")
      }
    }
  },
  {
    defaultNavigationOptions: props => {
      return {
        tabBarLabel: "Wallets",
        headerBackTitleStyle: {
          color: theme.primary500
        },
        headerTintColor: theme.primary500,
        headerTitleStyle: {
          color: theme.fg100
        }
      };
    },
    headerLayoutPreset: "center"
  }
);

const ReceiveStack = createStackNavigator(
  {
    Receive: {
      screen: ReceiveScreen,
      navigationOptions: {
        title: tran.getStr("Receive")
      }
    }
  },
  {
    headerLayoutPreset: "center"
  }
);

const MenuStack = createStackNavigator(
  {
    Menu: {
      screen: MenuScreen,
      navigationOptions: {
        title: tran.getStr("Menu")
      }
    },
    ViewSeedPhrase: {
      screen: ViewSeedScreen,
      navigationOptions: {
        title: tran.getStr("Seed_Phrase")
      }
    },
    FAQScreen: {
      screen: FAQScreen,
      navigationOptions: {
        title: tran.getStr("F.A.Q.")
      }
    },
    SweepScreen: {
      screen: KeySweepScreen,
      navigationOptions: {
        title: tran.getStr("Sweep")
      }
    },
    ContactUsScreen: {
      screen: ContactUsScreen,
      navigationOptions: {
        title: tran.getStr("Contact_Us")
      }
    },
    LogoutScreen: {
      screen: LogoutScreen,
      navigationOptions: {
        title: tran.getStr("Logout?")
      }
    },
    SelectCurrencyScreen: {
      screen: SelectCurrencyScreen,
      navigationOptions: {
        title: tran.getStr("Select_Currency")
      }
    },
    SelectLanguagesScreen: {
      screen: SelectLanguagesScreen,
      navigationOptions: {
        title: tran.getStr("Select_Languages")
      }
    }
  },
  {
    headerLayoutPreset: "center",
    defaultNavigationOptions: {
      headerBackTitleStyle: {
        color: theme.primary500
      },
      headerTintColor: theme.primary500,
      headerTitleStyle: {
        color: theme.fg100
      }
    },

    initialRouteName: "Menu"
  }
);

const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Receive: ReceiveStack,
    Menu: MenuStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;

        // default icon
        let iconName = "ios-menu";

        if (routeName === "Home") {
          iconName = `ios-wallet`;
        } else if (routeName === "Menu") {
          iconName = `ios-menu`;
        } else if (routeName === "Receive") {
          iconName = "ios-download";
        }

        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor ? tintColor : undefined}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: theme.primary500,
      inactiveTintColor: theme.fg300,
      tabStyle: {
        paddingVertical: 5
      }
    }
  }
);
const MainAppStack = createStackNavigator(
  {
    MainAppTabs: BottomTabNavigator,
    SendStack,
    ViewPrivacyPolicy: {
      screen: ViewPrivacyNoticeScreen
    },
    ViewTermsOfUse: {
      screen: ViewTermsOfUseScreen
    }
  },
  {
    initialRouteName: "MainAppTabs",
    headerMode: "none"
  }
);
export default MainAppStack;
