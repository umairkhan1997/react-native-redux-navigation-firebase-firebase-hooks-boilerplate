import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Inputs from '../components/inputs'

const Contact = (props) => {

  const [inpVal, setInpVal] = useState('');

    const onChangeValueHandler = (e, stat) => {
    setInpVal(e)
    console.log(e,'asd')  
    };
    return (
    
    <View>
    <Inputs     value={inpVal} onChangeValue={(e) =>
                    onChangeValueHandler(e, "setInpVal")
                  }/>
    </View>
    
  );
};

const styles = StyleSheet.create({
 
});

export default Contact;
