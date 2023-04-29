import { View, Text, SafeAreaView, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import HeaderLeftBtn from "../components/home/header/headerLeft";
import HeaderRightBtn from "../components/home/header/headerRight";
import { Stack, useRouter } from "expo-router";
import { getDinner } from "./config/apiCalls";
import { useQuery } from "react-query";
import { FONTS, SIZES, COLORS } from "../constants";
import DinnerCard from "../components/cards/DinnerCard";


const Dinner = () => {
    const router = useRouter()
    const { status, data:dinner } = useQuery('dinner', getDinner)
   const handleChange = (item) => (
    router.push(`/product/${item._id}`)
   )

    return (
        <SafeAreaView >
        <Stack.Screen
         options={{
            headerStyle: {backgroundColor: COLORS.lightWhite},
            headerBackVisible: false,
            headerShadowVisible: false,
            headerRight: () => (
                <HeaderRightBtn /> 
            ),
            headerLeft: () => (
                <HeaderLeftBtn handlePress={() => router.back()} /> 
            ),
            headerTitle: ""
         }}
         
        />
        <View style={styles.container}>
            <Text style={styles.title}>Dinner</Text>
          {status === "loading" && <ActivityIndicator />}
           {status === 'error' && (<Text>something went wrong</Text> )}
            {status === 'success' && (
            <View style={styles.productContainer}>
                <FlatList
                    data={dinner}
                    renderItem ={({item}) => (
                        <DinnerCard item={item} handleChange={handleChange}/>
                    )}
                    keyExtractor={item => item._id}
                    numColumns={2}
                    />
            </View>
            )}  
            
           
         </View>
    </SafeAreaView>

    
)
    
}

const styles = StyleSheet.create({
    header: {
        
        flexDirection: 'row',
        marginHorizontal: 15,
        
    },
    title: {
        paddingLeft: 30,
        fontFamily: FONTS.bold,
        fontSize: SIZES.xLarge,
        color: '#109685'
    },
    productContainer: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        
        justifyContent: "space-between"
    },
    container: {
        width: '100%',
        height: '100%'
    }
})

export default Dinner;