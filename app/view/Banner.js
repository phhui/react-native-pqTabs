import React, { Component } from 'react';
import { Text, View,DeviceEventEmitter,StyleSheet} from 'react-native';
import { Button, Title,Icon,Header} from 'native-base';
//0菜单 1返回+菜单 2返回 3返回+分享
class Banner extends Component {
    goBack(page,param){
      DeviceEventEmitter.emit('callback',page,param);
    }
  render() {
    return(
        <Header style={styles.header}>
            <Button style={styles.leftButton} transparent onPress={this.goBack.bind(this,this.props.param.parent,this.props.param)}>
                {this.props.param.headerStyle==0?null:<Icon style={styles.backButton} name="md-arrow-back"/>}
            </Button>
            <Title style={{flex:1,paddingTop:10}}>超级资讯</Title>
            {this.props.param.headerStyle>1?<RightBtn headerStyle={this.props.param.headerStyle} />:<MenuBtn headerStyle={this.props.param.headerStyle} />}
        </Header>
    );
  }
}
class MenuBtn extends Component{
    goBack(page,param){

    }
    checkLogin(){

    }
    render(){
        return(
            <Button transparent style={styles.rightButton} transparent onPress={this.checkLogin.bind(this)}>
                <Icon style={styles.Menu} name="md-menu" />
            </Button>
        );
    }
}
class RightBtn extends Component{
    render(){
        return(
            <View>
                {this.props.headerStyle==2?null:<ShareBtn headerStyle={this.props.headerStyle} />}
            </View>
        );
    }
}
class ShareBtn extends Component{
    share(){

    }
    setFont(){

    }
    render(){
        return(
            <View style={{width:100,justifyContent:'flex-end',alignItems:'flex-end',flexDirection: 'row'}}>
                <Button transparent transparent onPress={this.setFont.bind(this)}>
                    <Text style={{color:'#ffffff'}}> Aa </Text>
                </Button>
                <Button transparent transparent onPress={this.share.bind(this)}>
                    <Text style={{color:'#ffffff'}}>分享</Text>
                </Button>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    header:{
        padding:0,
        height:50,
        backgroundColor:'#f44336',
        alignItems: 'flex-start',
        justifyContent:'flex-start'
    },
    leftButton:{
        flex:1,
        paddingLeft: 0,
        marginLeft:0,
        marginTop:8,
        justifyContent:'flex-start',
        alignItems:'flex-start',
    },
    rightButton:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'flex-end',
        paddingRight: 0,
        marginRight:0,
    },
    backButton: {
        paddingLeft: 0,
        marginLeft:0,
        height:30,
        color:'#fff',
        justifyContent:'flex-start',
        alignItems:'flex-start',
    },
    Menu: {
        paddingRight: 0,
        marginRight:0,
        height:30,
        color:'#fff',
        justifyContent:'flex-end',
        alignItems:'flex-end',
    },
});
export default Banner;