import { View, Text, SafeAreaView, ScrollView, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import { useRouter, useSearchParams, usePathname, Stack } from "expo-router";
import { useState } from "react";
import { useQuery } from "react-query";
import { getProduct } from "../config/apiCalls";
import { COLORS, FONTS, SIZES } from "../../constants";
import Footer from '../../components/Footer'
import HeaderLeftBtn from "../../components/home/header/headerLeft";
import HeaderRightBtn from "../../components/home/header/headerRight";
import ProductDetailsCard from "../../components/cards/ProductDetailsCard";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";


const ProductDetails = () => {
    const router = useRouter()
    const pathname = usePathname()
    const id = pathname.split('/')[2]
    const { data: food, status } = useQuery(['product', id], getProduct)
    
   
    
    const [selectedProtein, setSelectedProtein] = useState([]);
    const [selectedDrinks, setSelectedDrinks] = useState([])
    const totalProtein = selectedProtein.reduce((acc, curr) => acc + curr.price, 0)
    const totalDrinks = selectedDrinks.reduce((acc, curr) => acc + curr.price, 0)
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()
    
    const changeQuantity = (q) => {
        if (q === 'dec') {
            quantity > 1 && setQuantity(quantity - 1)
        } else {
            setQuantity(quantity + 1)
        }
    }

    const handleDrinksCheckboxChange =(item) => {
        const isSelected = selectedDrinks.includes(item)
        setSelectedDrinks(
            isSelected? 
            selectedDrinks.filter((dataItem) => dataItem !== item)
            : [...selectedDrinks, item]
        )
    }
    
    const handleProteinCheckboxChange = (item) => {
        const isChecked = selectedProtein.includes(item);
        setSelectedProtein(
            isChecked ?
            selectedProtein.filter((dataItem) => dataItem !== item)
            : [...selectedProtein, item]
        );
    };

    const handleSubmit = () => {
       dispatch(addProduct({...food, quantity, proteinPrice: totalProtein*quantity, drinkPrice: totalDrinks*quantity}))
    }
    
    
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
                    <HeaderLeftBtn handlePress={() => router.push('/')} /> 
                ),
                headerTitle: ""
             }}
             
            />
            <>
                <View>
                    {status === 'loading' && <ActivityIndicator />}
                    {status === 'error' && <Text>Something went wrong</Text>}
                    
                        {status === 'success' && (
                            <View >
                                <FlatList
                              
                                data={food ? [food] : []}
                                renderItem={({item}) => (
                                    <ProductDetailsCard selectedDrinks={selectedDrinks} handleDrinksCheckboxChange={handleDrinksCheckboxChange} handleSubmit={handleSubmit}  handleProteinCheckboxChange={handleProteinCheckboxChange} selectedProtein={selectedProtein} changeQuantity={changeQuantity} quantity={quantity}  item={item}  />
                                )}
                                keyExtractor={item => item._id}
                                />
                               
                            </View>
                    )
                    }  
                 </View>
                 {/* <View style={styles.tabsContainer}>
                    <FoodTabs 
                        tabs={tabs} 
                        activeTabs={activeTabs} 
                        setActiveTabs={setActiveTabs} 
                    />
                    {displayTabContent()}
                 </View> */}
                 
                {/* <View style={styles.footerContainer}>
                  <Footer handleSubmit={handleSubmit} />
                </View>  */}
                
            </>
         </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    tabsContainer: {
        marginTop: 10,
        height: 220,
        backgroundColor: COLORS.lightWhite,
        width: '100%'
    },
    footerContainer: {
        marginTop: 10
    }
})

export default ProductDetails