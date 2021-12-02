import React, { useState , useContext } from "react";
import { View, Switch, StyleSheet } from "react-native";
import { EventRegister } from "react-native-event-listeners";
import themeContext from "../config/themeContext";
const DarkModeToggle = () => {
  const [mode,setMode] = useState(false)
  const theme = useContext(themeContext);

  return (
    <View style={styles.container}>
      <Switch
      value={mode}
      onValueChange={(value)=>{
          
        setMode(value)
        EventRegister.emit("changeTheme", value  )
    
    }}
      
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    
  }
});

export default DarkModeToggle;