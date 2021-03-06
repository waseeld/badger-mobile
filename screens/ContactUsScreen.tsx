import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Linking,
  TouchableOpacity
} from "react-native";
import { NavigationScreenProps } from "react-navigation";
import styled from "styled-components";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { T, Spacer } from "../atoms";

import lang from "../_locales/index";
var tran = new lang("ContactUsScreen");

const ScreenWrapper = styled(ScrollView)`
  padding: 7px 16px;
`;

type Props = NavigationScreenProps & {};

const ContactUsScreen = (props: Props) => {
  return (
    <SafeAreaView
      style={{
        height: "100%"
      }}
    >
      <ScreenWrapper
        contentContainerStyle={{
          flexGrow: 1
        }}
      >
        <Spacer />
        <T center>{tran.getStr("Msg_we_hope")}</T>
        <Spacer small />
        <T center>{tran.getStr("msg_if_you wish")}</T>
        <Spacer large />
        <T center>
          <Ionicons name="ios-mail" size={22} /> {tran.getStr("Email")}
        </T>
        <Spacer tiny />
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("mailto:badger@bitcoin.com?subject=Badger Wallet")
          }
        >
          <T center size="large">
            {tran.getStr("Email_badger@bitcoin.com")}
          </T>
        </TouchableOpacity>
        <Spacer />
        <T center>
          <FontAwesome name="telegram" size={22} />{" "}
          {tran.getStr("Msg_Telegram")}
        </T>
        <Spacer tiny />
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://t.me/joinchat/IoTQ_hGflnfwd3YJSF8cRQ")
          }
        >
          <T center size="large">
            {tran.getStr("Badger_Wallet_Group")}
          </T>
        </TouchableOpacity>
        <Spacer />
      </ScreenWrapper>
    </SafeAreaView>
  );
};

export default ContactUsScreen;
