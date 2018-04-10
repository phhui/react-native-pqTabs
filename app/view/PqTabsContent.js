import React, { Component } from 'react';
import { View,Text,Alert,StyleSheet,ViewPagerAndroid,TouchableOpacity,DeviceEventEmitter,ScrollView } from 'react-native';
import DataList from './DataList';

class PqTabsContent extends Component {
    componentDidMount(){
        this.subscription = DeviceEventEmitter.addListener('chooseList',this._onListenerCallback.bind(this));
    }
    componentWillUnmount(){
        this.subscription.remove();
      }
    _onListenerCallback(focus){
         this.viewPage.setPage(focus);
      };
     onPageSelected(e){
         DeviceEventEmitter.emit('setFocusTab',e.nativeEvent.position);
     }
    renderPage(){
        pages=[];
        for(let i=0;i<5;i++){
            pages.push(
                <View style={styles.viewItem}>
                <DataList type={i}/>
                </View>
            );
        }
        return pages;
    }
    render() {
        return (
            <View style={{width:380,height:600}}>
                <ViewPagerAndroid style={styles.viewPager} onPageSelected={this.onPageSelected} ref={viewPager => {this.viewPage = viewPager;}}>
                      {this.renderPage()}
                </ViewPagerAndroid>
             </View>
        );
    }
}
const styles = StyleSheet.create({
  viewPager: {
   flex:1,
   width:380,
   height:600
  },
  viewItem:{
    flex:1,
    width:380,
    height:300,
  },
  text:{
    fontSize:20,
    color:'red',
    flex:1,
  }
})
export default PqTabsContent;