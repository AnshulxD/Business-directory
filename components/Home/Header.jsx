import { View, Text, Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import {Colors} from '../../constants/Colors'

export default function Header() {

    const {user} = useUser();
    return (
        <View style={{
            padding:20,
            paddingTop:70,
            backgroundColor:Colors.PRIMARY,
        }}>
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
        }}>
            <Image source={{uri:user?.imageUrl}}
            style={{
                width:45,
                height:45,
                borderRadius:99,
            }}/>
            <View>
                <Text style={{
                    color: '#fff'
                }}>Welcome</Text>
                <Text style={{
                    fontWeight: 'bold',
                    color: '#fff',
                    fontSize: 20,
                    fontFamily: 'outfit'
                
                }}>{user?.fullName}</Text>
            </View>
        </View>
        {/*Search Bar*/}
        <View>

        </View>
        </View>
    )
}