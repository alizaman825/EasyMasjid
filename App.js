import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Button,
  ScrollView,
  Image,
} from 'react-native';
import { NavigationContainer , DarkTheme } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './pages/homepage/homepage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Signup from './pages/signupmodal/signup';
import Signin from './pages/signinModal/signin';
import ForgotPass from './pages/forgotpass/forgotpass';
import LocateMasjid from './pages/nearbymasjid';
import MasjidDetails from './pages/masjiddetails';
import Clock from './pages/clock';
import MasjidProperties from './pages/masjidproperties/index'
import Event from './pages/eventPagecomponents/event';
import EmptyListenLive from './pages/listenlive/emptylistenlive/index'
import JamaatVisit  from './pages/jamaatVisit';
import EtqafRegistrationMain from './pages/etqafRegistration/index'
import MasjidNeeds from './pages/masjidneeds';
import DonatePage from './pages/donation';
import ResetPass from './pages/resetpass/resetpass'
import PaymentDetails from './pages/donation/paymentdetails';
import Donationsucces from './pages/donationsuccess/donationsucces'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import Icon1 from './assets/avatar.jpeg'
import MenuItem1 from  './assets/menuItem1.png'
import MenuItem2 from  './assets/menuItem2.png'
import MenuItem3 from  './assets/menuItem3.png'
import MenuItem4 from  './assets/menuItem4.png'
import MenuItem5 from  './assets/menuItem5.png'
import MenuItem6 from  './assets/menuItem6.png'
import MenuItem7 from  './assets/menuItem7.png'
import MenuItem8 from  './assets/menuItem8.png'
import Arrow from './assets/greenarrow.png'
import AllNotifications from './pages/Notifications';
import Payment from './pages/paymentMethods';
import Reminder from './pages/reminder';
import AllDayActivities from './pages/allDayactivities/index'
import AddMethod from './pages/donation/paymentmethods/addAmethod';
import Toggle from './pages/reminder/switch';
import { EventRegister } from 'react-native-event-listeners';
import DarkModeToggle from './pages/darkmodeswitch/darkmode';
import themeContext from './pages/config/themeContext';
import theme from './pages/config/theme'
import { DefaultTheme } from 'react-native-paper';
import Map from './pages/Map/Map';


const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



const StackNav = ({ route, navigation }) => {
  return (
    <>
      
      <Stack.Navigator >
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Sign In" component={Signin} />
        <Stack.Screen name="Forgot Password" component={ForgotPassword} />
        <Stack.Screen name="Sign Up" component={Signup} />
        <Stack.Screen name="Find Masjid" component={Map} />
        <Stack.Screen name="Masjid Details" component={MasjidDetails} />
        <Stack.Screen name="Clock" component={Clock} />
        <Stack.Screen name="Masjid Properties" component={MasjidProperties} />
        <Stack.Screen name="Events" component={Event} />
        <Stack.Screen name="Listen Live" component={EmptyListenLive} />
        <Stack.Screen name="Tableegh Jamaat Visit" component={JamaatVisit} />
        <Stack.Screen name="Etqaf Registration" component={EtqafRegistrationMain} />
        <Stack.Screen name="Masjid Needs" component={MasjidNeeds} />
        <Stack.Screen name="Donate" component={DonatePage} />
        <Stack.Screen name="New Password" component={ResetPass} />
        <Stack.Screen name="Credit Card" component={PaymentDetails} />
        <Stack.Screen name="Success" component={Donationsucces} />  
        <Stack.Screen name="Notifications" component={AllNotifications}/>
        <Stack.Screen name="Payment Methods" component={Payment}/>
        <Stack.Screen name="Jamaat Reminder" component={Reminder}/>
        <Stack.Screen name="All Day Activities" component={AllDayActivities}/>
        <Stack.Screen name="Add Payment Method" component={AddMethod}/>
      </Stack.Navigator>
    
    </>
  );
};

function CustomDrawerContent(props) {
  const width = useWindowDimensions().width * 0.3;
const  theme = useContext(themeContext)
  return (
    <DrawerContentScrollView {...props}>
      <View style={{backgroundColor:theme.background,}} >
        <TouchableOpacity onPress={() => props.navigation.navigate("Home")}
          style={styles.menuItemsCard}>
         
          <Avatar
                    source={Icon1}
                    rounded
                    size={60}
                    />
          
        </TouchableOpacity>
        <TouchableOpacity
           onPress={() => props.navigation.navigate('Home')}
          style={{ display:'flex',flexDirection:'row',justifyContent:"space-around",marginTop:30,alignItems:'center'}}>      
            <Image source={MenuItem1} style={{marginTop:10}} />
            <Text style={{paddingTop:10,fontSize:18,fontWeight:'400',color:'#05B678'}}>Your Masjids</Text>
          
            <Image source={Arrow} style={{marginTop:10}}/>
            
        </TouchableOpacity>
        <TouchableOpacity
           onPress={() => props.navigation.navigate('Notifications')}
          style={{ display:'flex',flexDirection:'row',justifyContent:"space-around",marginTop:30,alignItems:'center'}}>      
            <Image source={MenuItem2} style={{}}/>
            <Text style={{paddingTop:10,fontSize:18,fontWeight:'400',color:'#05B678'}}>Notifications</Text>
          
            <Image source={Arrow} style={{marginTop:10}}/>
            
        </TouchableOpacity>
        <TouchableOpacity
           onPress={() => props.navigation.navigate('Payment Methods')}
          style={{ display:'flex',flexDirection:'row',justifyContent:"space-around",marginTop:30,alignItems:'center'}}>      
            <Image source={MenuItem3} style={{}}/>
            <Text style={{paddingTop:10,fontSize:18,fontWeight:'400',color:'#05B678'}}>Payment Methods</Text>
          
            <Image source={Arrow} style={{marginTop:10}}/>
            
        </TouchableOpacity>
        <TouchableOpacity
           onPress={() => props.navigation.navigate('Jamaat Reminder')}
          style={{ display:'flex',flexDirection:'row',justifyContent:"space-around",marginTop:30,alignItems:'center'}}>      
            <Image source={MenuItem4} style={{}}/>
            <Text style={{paddingTop:10,fontSize:18,fontWeight:'400',color:'#05B678'}}>Jamaat Reminder</Text>
          
            <Image source={Arrow} style={{marginTop:10}}/>
            
        </TouchableOpacity>
        <TouchableOpacity
           onPress={() => props.navigation.navigate('Find Masjid')}
          style={{ display:'flex',flexDirection:'row',justifyContent:"space-around",marginTop:30,alignItems:'center'}}>      
            <Image source={MenuItem5} style={{}}/>
            <Text style={{paddingTop:10,fontSize:18,fontWeight:'400',color:'#05B678'}}>Search a  Masjid</Text>
          
            <Image source={Arrow} style={{marginTop:10}}/>
            
        </TouchableOpacity>
        <TouchableOpacity
           onPress={() => props.navigation.navigate('All Day Activities')}
          style={{ display:'flex',flexDirection:'row',justifyContent:"space-around",marginTop:30,alignItems:'center'}}>      
            <Image source={MenuItem6} style={{}}/>
            <Text style={{paddingTop:10,fontSize:18,fontWeight:'400',color:'#05B678'}}>Your All Day Activities</Text>
          
            <Image source={Arrow} style={{marginTop:10}}/>
            
        </TouchableOpacity>
        <TouchableOpacity
           onPress={() => props.navigation.navigate('Home')}
          style={{ display:'flex',flexDirection:'row',justifyContent:"space-around",marginTop:30,alignItems:'center'}}>      
            <Image source={MenuItem7} style={{}}/>
            <Text style={{paddingTop:10,fontSize:18,fontWeight:'400',color:'#05B678'}}>Languages</Text>
          
            <Image source={Arrow} style={{marginTop:10}}/>
            
        </TouchableOpacity>
        <View style={{display:"flex",flexDirection:'row',justifyContent:'space-around',marginTop:30,}}>
          <Text style={{paddingTop:10,fontSize:18,fontWeight:'400',color:'#05B678',}}>
            Dark Mode
          </Text>
          <View >
          <DarkModeToggle/>
          </View>
          </View>
        <TouchableOpacity
           onPress={() => props.navigation.navigate('Home')}
          style={{ display:'flex',flexDirection:'row',justifyContent:"space-around",margin:30,alignItems:'center'}}>      
            <Image source={MenuItem8} style={{}}/>
            <Text style={{paddingTop:10,fontSize:18,fontWeight:'400',color:'#05B678'}}>Logout</Text>
          
            <Image source={Arrow} style={{marginTop:10}}/>
            
        </TouchableOpacity>
        

      </View>
    </DrawerContentScrollView>
  );
}

function MyDrawer({ navigation }) {
  return (
    <>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Screen1" component={StackNav} />
        
      </Drawer.Navigator>
    </>
  );
}

export default function App() {
  const [mode,setMode] = useState(false)

  useEffect(()=>{
    let eventListener = EventRegister.addEventListener("changeTheme",(data)=>{
      setMode(data);
      console.log(data)
    });
    return() => {
      EventRegister.removeEventListener(eventListener);
    }
  })
  return (
    <themeContext.Provider value = {mode === true ? theme.dark : theme.light}>
    <NavigationContainer independent={true} theme={mode === true ? DarkTheme : DefaultTheme}>
      <MyDrawer />
    </NavigationContainer>
    </themeContext.Provider>
  );
}



function ForgotPassword({ navigation, route }) {
  console.log(route.params);
  return (
    <View >
     <ForgotPass navigation={navigation}/>
    </View>
  );
}
 

const styles = StyleSheet.create({
  container: {
   
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
   
  },
  menuItemsCard: {
   
    marginTop:50,
    marginLeft:50,
    borderRadius: 10,
  },
  circleContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    padding: 10,
    marginTop:40,
  },
});

