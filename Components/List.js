import React from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity} from 'react-native';
import Items from './Items';
const List = (props) => {



    
    return(
      
           <View>
                 <FlatList
            data={props.list}
            renderItem = { ({item}) =>(
           <Items item = {item} clicked={props.handledelete}  />
            )}
           />
           </View>
       
    )
}

export default List;
