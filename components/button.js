import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {Button}  from 'native-base'

const Buttons = (props) => {
  return (
    
    <View>
    <Button >
    <Text >{props.title}</Text>
    </Button>
    </View>
    
  );
};

const styles = StyleSheet.create({

});

export default Buttons;
