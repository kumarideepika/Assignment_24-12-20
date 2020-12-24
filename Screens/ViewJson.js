import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,TextInput
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Container,Card, Spinner} from 'native-base'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { FlatList } from 'react-native-gesture-handler';
// const timer;
class ViewJson extends Component{
    constructor(props){
        super(props);
        console.log('deep'+JSON.stringify(''))
        this.state={
           data:''
        }
        
        
    }
    componentDidMount(){
        this.setState({data:this.props.route.params.item})
    }


    render(){
        return(
            <Container style={styles.MainConatiner}>
                <Card style={{justifyContent:'center',padding:20,width:'95%',borderRadius:10}}>
                    <Text>{this.state.data}</Text>
                </Card>
            </Container>
            
        )
    }

}
export default ViewJson;
const styles = StyleSheet.create({
    

})