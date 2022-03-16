import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


const Audiobook = ({navigation}) => {
  return (
    <View style={styles.container} >
      <Text>Livres Audio</Text>
    </View>
  )
}

export default Audiobook;
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    }
})