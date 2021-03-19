import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const List = () => {

    return(
        <View style={styles.header} >
        <Text style={styles.text}>TODO APP</Text>

        </View>
    )
}

export default List;
const styles = StyleSheet.create({
    header : {
        backgroundColor : "coral",
        height : 80,
        paddingTop : 35
    },
    text : {
      fontWeight : "bold",
      fontSize : 20,
      textAlign :"center"
    }
  });