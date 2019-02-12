import React, {Component} from 'react';
import { StyleSheet, View, Button, Text, TouchableOpacity, Alert } from 'react-native';

export default class CompA extends Component {
 
  render() {
    return (
      <View style={styles.MainContainer} >
        <View style={[styles.ComponentStyle, { backgroundColor: this.props.view_compA ? '#607D8B' : '#009688' }]} 
          activeOpacity = { .5 } 
          disabled={this.props.view_compA} >
            <Text style={styles.TextStyle}>{this.props.view_compA ? "Component B Disabled" : "Component B Enabled"} </Text>
        </View>
        <Button style={styles.ButtonStyle} title='Enable/Disable A' onPress={this.props.enable_compA} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  ComponentStyle: {
      height:120
  },
  TextStyle:{
    color:'#fff',
    textAlign:'center',
    fontSize: 20,
    padding: 50,
}
});
