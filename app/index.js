import { Stack } from "expo-router";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } 
from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import { Badge } from 'react-native-elements';
import HeaderRightBtn from '../components/home/header/headerRight'

import Welcome from "../components/home/welcome";


import { COLORS, SIZES, FONTS } from "../constants";
import TopCategories from "../components/home/TopCategories";
import GetTogether from "../components/home/header/SideProducts/GetTogether";
import Desert from "../components/home/header/SideProducts/Desert";




const Index = () => {

    return (
        <SafeAreaView style={{padding: 10 }}>
           
            <Stack.Screen
            options={{
                headerStyle: {backgroundColor: COLORS.lightWhite, height: 80,  borderRadius: 10, },
                headerShadowVisible: false,
                headerRight: () => (
                    <HeaderRightBtn />
                ),
                
                headerLeft: () => (
                   
                        <View>
                            <Text style={styles.headerCompany}>STEADYPROPER~</Text>
                        </View>
                  
                ),
                headerTitle: ''
               }}   
                
            />
            <ScrollView showsVerticalScrollIndicator={false}>
            <Welcome />
            <TopCategories />
            <GetTogether />
            <Desert />   
               
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    headerCompany: {
        fontSize: SIZES.large,
        color: '#109685',
        fontFamily: FONTS.bold
    },
   
   
})
export default Index;