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
class Home extends Component{
    constructor(props){
        super(props);
        console.log('deep'+JSON.stringify(''))
        this.state={
            searchText:'',
            setDisplayArr:[],
            time:'',
            data:[],
            page:'',
            displayArray:[]

        }
        
        this.GetPagination(0);
    }
async GetPagination(page){
    
    fetch('https://hn.algolia.com/api/v1/search_by_date?tags=story&page='+page).then((response)=>response.json()).then((result)=>{
        // this.setState({data:[ ...this.state.data, ...result.hits]})
        this.setState({data:result.hits})
        // alert(JSON.stringify(this.state.data));



    })
}

//  timer=setInterval(() => {
//      clearTimeout(this.state.time);
//      page=0;
//     this.GetPagination(page++);
//     this.setState({time:setInterval(() => {
//         this.GetPagination(page++);
//     }, 10000)})
// }, 10000);


// resetList(){
//     this.setState({
//         setDisplayArr:[],
//         setFilterEnable:false,
//         setCreateDataFilter:false,
//         setsearchenable:false,
//         setSearch:''
//     });
   

// }

itemsep =()=>{
return(
    <View style={{width:'90%',height:1,backgroundColor:'#0947A5'}}></View>
)
}
 Reloadpage=()=>{
    clearTimeout()
}
SearchTextinput (text){
    this.setState({searchText:text})
}
onSearch(){
    if(searchText){
        reloadList();
    }else {
        sortedlist();
    }
}
onClick(item){
this.props.navigation.navigate('ViewJson',{item:item})
}
Bottomfooter=()=>{
    return(
        <View>{
        (this.state.update)?
        <ActivityIndicator size="Larger" color= "#454545" style={{marginLeft:5}} />:null
        }</View>
    )
}

    render(){
        return(
            <Container style={styles.MainConatiner}>
                <TextInput style={styles.text} 
                name='search'
                placeholder="Search by title"
                onChangeText={(searchText => this.SearchTextinput(searchText))}
                value={this.state.searchText}
                // onSubmitEditing={onSearch}
                />
                

               
                <FlatList
                style={{width:'100%'}}
                data={this.state.data}
                keyExtractor={(item,index)=>index.toString()}
                ItemSeparatorComponent={this.itemsep}
                initialNumToRender={1}
                onEndReachedThreshold={0.1}
                onMomentumScrollBegin={()=>{this.onEndReached=false;}}
                // onEndReached={()=>{
                //     if(!this.onEndReached){
                //         this.GetPagination();
                //         this.onEndReached=true;
                //     }
                // }
            // } 
                renderItem={({item,index})=>
                
                <Card style={styles.carditem}>
                <TouchableOpacity activeOpacity={0.7}
                onPress ={this.onClick.bind(this,item)} >
                    <Text style={{fontSize:16}}><Text style={{fontWeight:'bold'}}>URL:</Text>{" "}<Text style={{color:'#562107'}}>{item.url}</Text></Text>
                    <Text style={{fontSize:16}}><Text style={{fontWeight:'bold'}}>Created_at:</Text>{" "}<Text style={{color:'#562107'}}>{item.created_at}</Text></Text>
                    <Text style={{fontSize:16}}><Text style={{fontWeight:'bold'}}>Author:</Text>{" "}<Text style={{color:'#562107'}}>{item.author}</Text></Text>
                </TouchableOpacity>
            </Card>
            } 
            ListFooterComponent={this.Bottomfooter}
                />


            </Container>
            
        )
    }

}
export default Home;
const styles = StyleSheet.create({
    carditem:{
    borderWidth:1,
borderColor:'#ccc',
padding:15,
width:400,
height:125
    },
    text:{
        
                   
            alignSelf:'center',
            padding:5,
            marginTop:20,
            width:350,
        borderRadius:8,
        backgroundColor:'#fff',
        borderColor:'#0f0D02',
        borderRadius:10,

        borderWidth:1
    },
    MainConatiner:{
        flex:1,
        justifyContent:'center',
        margin:5,
        paddingTop:(Platform.OS === 'io') ? 20:0
    },
    viewStyle:{
        padding:5,
        height:60,
        justifyContent:'center',
        backgroundColor:'#0947A5',
        margin:4,
        borderRadius:8
    },
    flatlist:{
        padding:8,
        color:'#fff',
        fontSize:20
    }
})