import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import LocateMasjid from '../nearbymasjid/index'
import Img1 from '../../assets/fab.png'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Map({navigation}) {
  return (
    <View style={styles.container}>
      <LocateMasjid navigation={navigation}/>
      <MapView
     region={{
        latitude: 31.5125805,
        longitude:74.3429796,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }} style={styles.map} >
      <Marker 
      coordinate={{
        latitude: 31.5125805,
        longitude:74.3429796,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,

      }}
      />
    {/* <TouchableOpacity style={{alignSelf:'center',}} onPress={()=>navigation.navigate("Home")}>
      <Image source={Img1} style={{width:72,height:72,}}/>
    </TouchableOpacity> */}
  
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  
  },
});
