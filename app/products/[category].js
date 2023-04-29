
import { 
    Text, View, SafeAreaView, StyleSheet,  FlatList, ActivityIndicator 
} from "react-native";
import { getProducts } from '../config/apiCalls'
import { usePathname, Stack, useRouter, useSearchParams } from "expo-router";


import { COLORS, FONTS, SIZES } from "../../constants";
import HeaderRightBtn from "../../components/home/header/headerRight";
import HeaderLeftBtn from "../../components/home/header/headerLeft";

import ProductCard from "../../components/products/ProductCard";

import { useQuery, useMutation, useQueryClient } from "react-query"




const Products = () => {
    const router = useRouter()
    const pathname = usePathname()
    const cat =pathname.split('/')[2]
    
    const { data: items, status } = useQuery(["products", cat], getProducts)
  
    
   
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
                <Text style={styles.title}>{cat}</Text>
              {status === "loading" && <ActivityIndicator />}
               {status === 'error' && (<Text>something went wrong</Text> )}
                {status === 'success' && (
                <View style={styles.productContainer}>
                    <FlatList
                        data={items}
                        renderItem ={({item}) => (
                            <ProductCard item={item} handleChange={handleChange} />
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

export default Products