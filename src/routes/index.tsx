import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages/Home';
import { FeatureScreen } from '../pages/Feature';

const Stack = createNativeStackNavigator();

export function Routes() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Feature" component={FeatureScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}