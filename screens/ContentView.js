import React from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,StyleSheet
} from 'react-native';


const ContentView = (props) => {
  return (
    
 <View style={styles.draw}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text >Hey </Text>
      <View />

{/* PAssword */}
<TouchableOpacity >
<Text >CHANGE PASSWORD</Text>
</TouchableOpacity>

{/* Notification */}
<TouchableOpacity onPress={()=>navigate('About')}>
<Text >About</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
    
  );
};

const styles = StyleSheet.create({
    draw:{
        backgroundColor:'white',
        height:'100%'
    }
});

export default ContentView;
