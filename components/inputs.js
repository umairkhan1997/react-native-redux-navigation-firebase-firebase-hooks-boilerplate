import React from 'react';
import {
  StyleSheet,
  View,
  TextInput
} from 'react-native';

const Inputs = (props) => {
    const {onChangeValue} =props
  return (
    <View style={{marginTop:40}}>
<TextInput placeholder="First and Last Name" style={{fontSize:20}} value={props.value} onChange={onChangeValue}/>
    </View>
    
  );
};

const styles = StyleSheet.create({
 
});

export default Inputs;
