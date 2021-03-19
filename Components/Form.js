import React,{useState} from 'react';
import { StyleSheet,Text, View,TextInput, Button } from 'react-native';

const Form = (props) => {
    
    const [ new_lang , setNew_lang] = useState("")
   
    const changed = (val) => {
        setNew_lang(val)
        
    }
   const handlesub = () => {
       props.handleadd(new_lang);
       setNew_lang("")
   }
   
   
    return(
        <View  >
       <TextInput
       style={styleform.input}
       placeholder='Add Language ...'
       onChangeText={changed}
       value={new_lang} />
       <Button title="Add Language" onPress={handlesub} color="coral" />

        </View>
    )
}

export default Form;
const styleform = StyleSheet.create({
    input : {
        borderBottomColor : "green",
        borderBottomWidth : 1,
        paddingHorizontal : 5,
        paddingVertical :5,
        marginBottom : 10
        
    }
  
  });