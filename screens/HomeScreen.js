import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import  Geolocation  from '@react-native-community/geolocation'

const HomeScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();
  

  const addMatch = () => {
    Geolocation.getCurrentPosition(
			position => {
				const location = JSON.stringify(position);

				console.log(location)
			},
			error => Alert.alert(error.message),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);
  }
  
    return (
      <View style={styles.container}>
        <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        <Icon.Button name="add" backgroundColor="#3b5998" onPress={()=>addMatch()}> 
          <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>
            Create a match
          </Text>
        </Icon.Button>
      {/* <Button
        title="Go to details screen"
        onPress={() => navigation.navigate("Details")}
      /> */}
      </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
