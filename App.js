
import React,{useState} from 'react';
import { StyleSheet, Text, View ,Button, Alert,Keyboard,TouchableWithoutFeedback} from 'react-native';
import Header from './Components/Header';
import List from './Components/List';
import Form from './Components/Form';
export default function App() {
  
  
  const [ info , setInfo] = useState([
    {key : '1', language : "CSS"},
    {key : '2', language : "REACT"},
    {key : '3', language : "HTML"},
    {key : '4', language : "JavaScript"},
    {key : '5', language : "PHP"},
    {key : '6', language : "Jquery"}
]);

const handleadd = (text) => {
  if(text.length > 3){
    setInfo([...info,{language : text ,key: Math.random().toString()}

    ])
  }else{
    Alert.alert("Oops!!","this lang not correct");
  }
  
}


const handledelete = (key) =>{
  setInfo(info.filter( it => it.key !== key) )
  }



const handle = () => {
  alert("hello");
}
  return (
    <TouchableWithoutFeedback onPress={ () => {
      Keyboard.dismiss()
    }}>
    <View >
    
      <View  >
           <Header /> 
      </View>

      <View style={styles.container}>
        
       <Form  handleadd={handleadd}/>
      </View>

      <View style={styles.container}>
           <List list={info} handledelete={handledelete} />
      </View>

    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    padding : 20
    
  },
});
