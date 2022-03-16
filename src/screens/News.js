import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


const News = ({navigation}) => {
  return (
    <View style={styles.container} >
        <Text>Aujourd'hui</Text>
    </View>
  )
}

export default News;
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    }
})