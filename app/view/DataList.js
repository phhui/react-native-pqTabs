import React, { Component } from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';

class DataList extends Component {
  render() {
        let w=Dimensions.get('window').width;
        let h=Dimensions.get('window').height-50;
    return (
      <View style={{alignItems: 'flex-start',flexDirection: 'column',width:w}}>
        <Text>当前内容{this.props.type}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    menu:{
      paddingLeft: 10,
      color:'#666666',
      fontSize:12,
      width:60,
      height:25,
    },
    listItem:{
      height:80,
      backgroundColor:'#999999',
    },
  });

export default DataList;