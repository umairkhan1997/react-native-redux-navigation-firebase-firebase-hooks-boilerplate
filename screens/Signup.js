import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import {Button } from 'native-base'
import Inputs from '../components/inputs'
import { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const Signup = (props) => {




const [inpVal, setInpVal] = useState('');
const [inpPass, setInpPass] = useState('');

const onChangeValueHandler = (e, stat) => {
    console.log(e.nativeEvent.text);
setInpVal(e.nativeEvent.text)
};
const onChangeValuePass = (e, stat) => {
    setInpPass(e.nativeEvent.text);
    console.log(e.nativeEvent.text);
    };

const SignInUser =()=>{
    firebase.auth().createUserWithEmailAndPassword(inpVal,inpPass)
    .then((result)=>{
        var user = result.user

        /////Adding user in collection
        firestore().collection('users').doc(user.uid).set({
            email:inpVal,password:inpPass
        }).then((done)=>{
            firebase.auth().signOut()
props.navigation.navigate('BottomsTab')
    }).catch((e)=>{
           alert(e.message)
        });
    })
    .catch((error) =>{
        alert(error)
    })

}
    return (
    
    <View style={styles.btnstl}>


<Inputs     value={inpVal} onChangeValue={(e) =>
                    onChangeValueHandler(e, "setInpVal")
                  }/>
                  <Inputs     value={inpPass} onChangeValue={(e) =>
                    onChangeValuePass(e, "setInpVal")
                  }/>

<Button 
onPress={()=>SignInUser()}>
    <Text >Sign Up</Text>
</Button>
    </View>
  );
};

const styles = StyleSheet.create({
    btnstl:{
        flex: 1, justifyContent: "center", alignItems: "center" 
    }
});


export default Signup;