import React, { Component } from 'react';
import { View,Text,Alert,StyleSheet,FlatList,TouchableOpacity,DeviceEventEmitter,ScrollView } from 'react-native';
import {List, ListItem,Button} from 'native-base';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import PqTabsContent from './PqTabsContent';

class PqTabsBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focus:0,
            horizontal:true,
         }
    }
    componentDidMount(){
        this.subscription = DeviceEventEmitter.addListener('setFocusTab',this._onListenerCallback.bind(this));
    }
    componentWillUnmount(){
        this.subscription.remove();
      }
    _onListenerCallback(focus){
         this.setState({
            focus:focus,
         });
      };
  renderTabs(){
    txt=["推荐","新闻","娱乐","体育","财经","科技","汽车","社会"]
    tabs=[];
    for(let i=0;i<txt.length;i++){
        tabs.push(
            <Button style={styles.button} transparent onPress={this.goTabs.bind(this,i,txt[i])}>
                <Text style={this.state.focus==i?styles.focus:styles.text}>{txt[i]}</Text>
            </Button>
        );
    }
    return tabs;
  }
  goTabs(ind,txt){
         this.setState({
            focus:ind,
         });
         DeviceEventEmitter.emit('chooseList',ind);
         //DeviceEventEmitter.emit('callback',page,param);
   }
    render() {
        return (
            <View>
                <View style={styles.main}>
                    <ScrollView horizontal={this.state.horizontal} showsHorizontalScrollIndicator={false} >
                        {this.renderTabs()}
                    </ScrollView>
                </View>
                <PqTabsContent />
            </View>
        );
    }
}
const styles = StyleSheet.create({
  main: {
   height:20,
   width:380,
   padding:0,
    borderBottomWidth:0.2,
    borderBottomColor:'gray'
  },
  button:{
    padding:0,
    height:20,
    width:50,
  },
  text: {
    flex:1,
    paddingTop:0,
    width:50,
    fontSize: 14,
    height: 20,
   textAlign:'center',
  },
  focus:{
    flex:1,
    color:'#f43610',
    paddingTop:0,
    width:50,
    fontSize: 14,
    height: 20,
   textAlign:'center',
  },
})
export default PqTabsBar;