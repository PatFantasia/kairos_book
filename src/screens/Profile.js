import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


const Profile = ({navigation}) => {
  return (
    <View style={styles.container} >
      <Text>Configuration</Text>
    </View>
  )
}

export default Profile;
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    }
})