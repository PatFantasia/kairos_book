import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Bookstore = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Librairie</Text>
     
      <Button
        title="Go Back"
        // onPress={() => navigation.goBack()}
      />
      
    </View>
  )
}

export default Bookstore;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    }
})