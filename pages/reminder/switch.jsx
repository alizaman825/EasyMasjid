import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

const Toggle = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#F4F9F7", true: "#05B678" }}
        thumbColor={isEnabled ? "white" : "white"}
        ios_backgroundColor="#F4F9F7"
        onValueChange={toggleSwitch}
        value={isEnabled}
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

export default Toggle;