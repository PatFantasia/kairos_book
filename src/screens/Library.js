import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Library = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Bibliothèque</Text>
      <Button
        title="Go to Result"
        // onPress={() => navigation.navigate('Result')}
      />
      <Button
        title="Go to Library... again"
        // onPress={() => navigation.push('Library')}
      />

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