import React,{useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Buttons from '../components/button'
import { connect } from "react-redux";
import { updateUser} from '../Redux/actions/authActions'
import { Drawer,Button} from 'native-base';
import ContentView from './ContentView'

const Home = (props) => {
  
  const [drawer, setDrawer] = useState([]);

  useEffect(() => {
    props.updateUser("user one data")
  }, []);  
  
 const openDrawer = () => {
    drawer._root.open();
  };
  const closeDrawer = () => {
    drawer._root.close();
  };


  return (
    <Drawer
    ref={ref => {
      setDrawer(ref);
    }}
    content={<ContentView menu={props}/>}
    onClose={() => closeDrawer()}
    openDrawerOffset={0.3}
    panCloseMask={0.3}
  >
    <View>
    <Button  onPress={()=>openDrawer()}>
      <Text>Drawer open</Text>
      </Button>
    </View>
   </Drawer> 
  );
};

const styles = StyleSheet.create({
  
});

const mapStateToProps = state => {
  return {

    user:state.authReducers.user,
  };
};

const mapDispatchToProps = dispatch => {
    return {
      updateUser: (user) => dispatch(updateUser(user)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
