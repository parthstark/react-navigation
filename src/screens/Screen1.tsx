import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const Screen1 = () => {
    const navigation = useNavigation<NativeStackScreenProps<RootStackParamList>>();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Screen1</Text>
            <Button title='Go to InfoScreen' onPress={() => navigation.push('InfoScreen')} />
        </View>
    )
}

export default Screen1