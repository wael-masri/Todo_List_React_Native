import React from 'react';
import {StyleSheet , Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
const Items = (props) => {

    return(
     <TouchableOpacity  style={styleslist.boxlist} onPress={() =>props.clicked(props.item.key)}>
         <AntDesign name="delete" size={24} color="red"  />
         <Text style={{marginLeft : 20}} >{props.item.language}</Text> 
     </TouchableOpacity>
    )
}

export default Items;

const styleslist = StyleSheet.create({
    boxlist : {
        backgroundColor : "silver",
        padding : 5,
        textAlign : 'center',
        marginTop : 10,
        flexDirection: "row"
    }
   
  });