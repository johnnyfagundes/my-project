import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Home = () => {

  const navigation = useNavigation();

  function handleGoToScreen() {
    navigation.navigate('Feature');
  }
 
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <TouchableOpacity
        style={{backgroundColor: 'red', paddingHorizontal: 90, paddingVertical: 20, borderRadius: 18, marginTop: 18}}
        onPress={handleGoToScreen}>
        <Text>Button</Text>
      </TouchableOpacity>
    </View>

  );
};
