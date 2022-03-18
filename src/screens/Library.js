import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Library = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Bibliothèque</Text>
    </View>
  )
}

export default Library;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    }
})