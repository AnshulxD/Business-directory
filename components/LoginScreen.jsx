import { View, Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from './../constants/Colors'
import { useWarmUpBrowser } from './../hooks/useWarmUpBrowser';
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
    useWarmUpBrowser();
            const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
        
            const onPress = React.useCallback(async () => {
            try {
                const { createdSessionId, signIn, signUp, setActive } =
                await startOAuthFlow();
        
                if (createdSessionId) {
                setActive({ session: createdSessionId });
                } else {
                // Use signIn or signUp for next steps such as MFA
                }
            } catch (err) {
                console.error("OAuth error", err);
            }
            }, []);
    return (
        <View>
            <View style={{
                //display:'flex',
                //alignItems:'center',
                //marginTop:150,
            }}> 
            <Image source={require('./../assets/images/icon.png')} 
            style={{
                width:500,
                height:550,
                
            }}/>
            <View style= {{backgroundColor:'#fff', padding:20, elevation:4}}>
                <Text style={{fontSize:30, fontFamily:'outfit',textAlign:'center',}}>Login The Ultimate 
                            <Text style={{color:Colors.PRIMARY}}> Custom Business Directory </Text>
                            App </Text>
                            <Text style={{fontFamily:'outfit', fontSize:15, textAlign:'center', marginVertical:15, color:Colors.GRAY}}>Find your favorite business near you</Text>
            </View>
            <TouchableOpacity style ={{
                backgroundColor:Colors.PRIMARY,
                padding:16,
                borderRadius:99,

            }}onPress={onPress}>
                <Text style={{textAlign:'center', color:'#fff', fontFamily:'outfit', marginTop: 0}}>Let's Get Started</Text>
            </TouchableOpacity>
            </View>
        </View>

        
    )
}