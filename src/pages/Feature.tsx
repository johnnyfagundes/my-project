import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { setRemoteConfigAndFetchValues } from '../services/firebase';
import { getRemoteFeatureValue } from '../utils/remoteConfig';

export const FeatureScreen = () => {

  const [isFeatureTest, setIsFeatureTest] = React.useState<boolean>(getRemoteFeatureValue('FeatureTest').asBoolean());
  const [isCondition, setIsCondition] = React.useState<string>(getRemoteFeatureValue('RemotineHome').asString());

  React.useEffect(() => {
    load();
  }, []);

  async function load() {
    await setRemoteConfigAndFetchValues();
    setIsFeatureTest(getRemoteFeatureValue('FeatureTest').asBoolean());
    setIsCondition(getRemoteFeatureValue('RemotineHome').asString());
  }

  function handleShowMessage() {
    alert('FeatureToggle is active!'); 
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: isCondition }}>
      {isFeatureTest ?
        <TouchableOpacity
          style={{ backgroundColor: '#000000', paddingHorizontal: 90, paddingVertical: 20, borderRadius: 18, marginTop: 18 }}
          onPress={handleShowMessage}>
          <Text style={{ color: '#ffffff' }}>This function is working</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity
          style={{ backgroundColor: '#cecece', paddingHorizontal: 90, paddingVertical: 20, borderRadius: 18, marginTop: 18 }}>
          <Text style={{ color: '#ffffff' }}>This function is not working</Text>
        </TouchableOpacity>
      }
    </View>

  );
};
