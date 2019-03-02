// UI components imported from 
// native-base docs http://docs.nativebase.io
// and react-native https://facebook.github.io/react-native/docs

import React from "react";
import { Font } from "expo";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from "react-native";
import QpiForm from "./QpiForm";

export default class App extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
  }

  render() {
    return (
      // VIEW: Front-end elements. Similar to html elements.
      // styles.{class} points to the styling of the object
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.headerText}> QPI Calculator </Text>
          </View>
          <View style={styles.formInputContainer}>
            <QpiForm />
          </View>
          <View>
            <TouchableHighlight>
                <View style={styles.addButton}>
                  <Ionicons name="ios-add" size={32} color="white"/> 
                  <Text style={styles.textButton}>ADD</Text>
                </View>
            </TouchableHighlight>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>0.00</Text>
          <Text style={styles.footerTextLabel}>Quality Point Index</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // the css of react native
  // contains the styling of each element
  container: {
    flex: 1
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#ddd"
  },
  headerText: {
    color: "#333333",
    fontSize: 40,
    padding: 30
  },
  footerContainer: {
    backgroundColor: "#1B1D1F",
    height: 150,
    justifyContent: "center",
    padding: 30
  },
  footerText: {
    fontSize: 60,
    color: "white",
    textAlignVertical: "center",
    textAlign: "right"
  },
  footerTextLabel: {
    color: "#717172",
    fontSize: 20,
    textAlignVertical: "center",
    textAlign: "right"
  },
  addButton:{
    backgroundColor: "#1B1D1F",
    flex: 1,
    flexDirection: "row",
    color: 'white',
    alignItems: 'center',
  },
  textButton:{
    color: 'white',
    paddingLeft: 30,
  }
});
