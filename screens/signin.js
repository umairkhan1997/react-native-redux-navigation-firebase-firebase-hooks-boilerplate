import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import {Button } from 'native-base'
const Signin = (props) => {



const SignInUser =()=>{
    props.navigation.navigate('BottomsTab')
}



    return (
    
    <View style={styles.btnstl}>
<Button 
onPress={()=>SignInUser()}>
    <Text >Sign In</Text>
</Button>
    </View>
  );
};

const styles = StyleSheet.create({
    btnstl:{
        flex: 1, justifyContent: "center", alignItems: "center" 
    }
});


export default Signin;