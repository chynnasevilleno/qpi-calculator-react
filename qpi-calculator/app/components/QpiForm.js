// UI components imported from
// native-base docs http://docs.nativebase.io
// and react-native https://facebook.github.io/react-native/docs
// QpiForm.js displays a row input on user click, each row has a unique keyvalue

import React from "react";
import { StyleSheet, Text, View, TextInput, Picker, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default class App extends React.Component {

  //this.state is the initial state of contents of the app
  constructor(props) {
    super(props);
    this.state = {
      grade: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View key={this.props.keyval} style={styles.form}>
          <Picker 
          selectedValue={this.state.grade}
          style={styles.gradeInput}
          mode='dropdown'
          onValueChange={(itemValue, itemIndex) =>
            this.setState({grade: itemValue})
          }>
            <Picker.Item label="A" value="4.0" />
            <Picker.Item label="B+" value="3.5" />
            <Picker.Item label="B" value="3.0" />
            <Picker.Item label="C+" value="2.5" />
            <Picker.Item label="C" value="2.0" />
            <Picker.Item label="D" value="1.0" />
            <Picker.Item label="F" value="0" />
            <Picker.Item label="FD" value="0" />
            {/* PS: Picker has onValueChange attrib in case back-end needs it */}
          </Picker>
          <TextInput style={styles.unitInput} />

          <TouchableOpacity onPress={this.props.deleteMethod} style={styles.rowDelete}>
            <Ionicons name="ios-close" size={32} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position:'relative',
  },
  form: {
    flexDirection: "row",
  },
  gradeInput: {
    height: 60,
    padding: 5,
    width: 200,
    color: "#505050",
    margin: 20,
    borderColor: "#B6B6BE",
    borderBottomWidth:1, 
    borderRadius: 10,
  },
  unitInput: {
    margin: 20,
    borderRadius: 10,
    height: 60,
    padding: 5,
    width: 100,
    borderColor: "#B6B6BE",
    color: "#505050",
    borderWidth: 2,
    paddingLeft: 20,
    fontSize: 20,
  },
  rowDelete:{
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
  },
});
