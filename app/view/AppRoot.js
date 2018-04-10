import React, { Component } from 'react';
import { AppRegistry,Dimensions,TouchableOpacity,DeviceEventEmitter,View,Alert } from 'react-native';
import { Container} from 'native-base';
import Banner from './Banner';
import PqTabsBar from "./PqTabsBar";

class AppRoot extends Component {
    constructor(props) {
        super(props);
        this.state = {page: 0,param:{param:{},parent:0,headerStyle:0}};
    }
  render() {
    return(
        <Container>
            <Banner param={this.state.param}/>
            <PqTabsBar />
        </Container>
    );
  }
}
export default AppRoot;