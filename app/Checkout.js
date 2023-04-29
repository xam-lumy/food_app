import { View, Image, Text, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView, FlatList, ActivityIndicator } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Entypo } from '@expo/vector-icons';
import HeaderLeftBtn from "../components/home/header/headerLeft";
import HeaderRightBtn from "../components/home/header/headerRight";
import { COLORS, SIZES, FONTS } from "../constants";
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';



const Checkout = () => {
    const router = useRouter()
    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerBackVisible: false,
                    headerShadowVisible: false,
                    headerRight: () => (
                        <TouchableOpacity onPress={() => router.push('/SignUp')}><FontAwesome5 name="user" size={24} color="black" /></TouchableOpacity>
                    ),
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => router.replace('/')}><Ionicons name="arrow-back-outline" size={24} color="black" /></TouchableOpacity>
                    ),
                    headerTitle: ""
                }}
                
            />

        </SafeAreaView>
    )
}

export default Checkout;