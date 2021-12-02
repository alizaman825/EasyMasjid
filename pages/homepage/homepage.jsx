
import React from 'react'
import { Button, Dimensions, Image, ScrollView, StyleSheet, Text, TextComponent, View, ViewComponent } from 'react-native'
import Signin from '../signinModal/signin';
import Img1 from '../../assets/1.png'
import Img2 from '../../assets/2.png'
import Img3 from '../../assets/3.png'
import Slider from '../../assets/03.png'
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container:{
flexDirection:'column',

    },
    text:{
        textAlign:"center",
        color:"#00536D",
        fontWeight:"bold",
        fontSize:30,
        marginTop:10

    },
    para:{
        textAlign:"center",
    },
    pagingText:{
        flexDirection:"row",
        backgroundColor:"#CDCFD0",
        borderRadius:10,
        alignSelf:'center',
    },
    pagingActiveText:{
        backgroundColor:"#05B678",
        borderRadius:10,
        alignSelf:'center'
           },
           pagination:{
               flexDirection:'row',
               alignSelf:'center',
               justifyContent:'space-evenly',
               flex:1,
               width:'80%',

           }
    
})
const {width} = Dimensions.get("window")
const height = '90%';

const images = [
    Img1,
    Img2,
    Img3
  
]

export default class  HomePage extends React.Component {
  
    navigations = this.props.navigation

    state = {
        active:0,
       
    }
    change =({nativeEvent}) => {
        const slider = nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
        if(slider !== this.state.active){
            this.setState({active:slider})
        }

    }
    render(){
    return (
        <View style={{backgroundColor:'white',height:'100%'}}>
            <StatusBar style='auto'/>
            <View style={styles.container}
            >
            <ScrollView pagingEnabled
            showsHorizontalScrollIndicator={false}
             horizontal 
             onScroll={this.change}
             style={{width,height }}>
            {
                images.map((item,index) => (
     <Image
        style={{width,height}}
        source={item}
            key={index}
            
            
            />

                ))
            }
            </ScrollView>
            </View>
            <View style={styles.pagination}>
            {images.map((a,k) =>(
                <Image style={k==this.state.active ? styles.pagingActiveText : styles.pagingText} 
                
                source={Slider}
                />
            ))}
            </View>
            <TouchableOpacity onPress={() => this.navigations.navigate('Sign In')}>
           <Text style={{textAlign:'center',marginTop:10,fontSize:24,fontWeight:'bold'}} >
             Lets Get Started
           </Text>
           </TouchableOpacity>
            
            </View>
    )
};
}
