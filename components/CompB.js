import React, {Component} from 'react';
import { StyleSheet, View, Button, Text, TouchableOpacity, Alert } from 'react-native';

export default class CompB extends Component {
 
  render() {
    return (
      <View style={styles.MainContainer} >
        <View style={[styles.ComponentStyle, { backgroundColor: this.props.view_compB ? '#607D8B' : '#009686' }]} 
          activeOpacity = { .5 } 
          disabled={this.props.view_compB} >
            <Text style={styles.TextStyle}> {this.props.view_compB ? "Component B Disabled" : "Component B Enabled"} </Text>
        </View>
        <Button title='Enable/Disable B' onPress={this.props.enable_compB} />

        <Text style={styles.TextStyle1}>{this.props.count}</Text>
        <Button title='Increment' onPress={this.props.counter} />
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
},
TextStyle1:{
    color:'#fff',
    padding: 50,
    textAlign:'center',
    fontSize: 30,
    backgroundColor: '#009688'
  }
});
