import { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, FlatList} from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import { FONTS, SIZES, COLORS } from "../../constants";
import Sides from "../sides/sides";
import Protein from "../sides/protein";
import Drinks from "../sides/drinks";
import { CheckBox } from "react-native-elements";





const ProductDetailsCard = ({item, handleSubmit, selectedProtein,  handleProteinCheckboxChange, handleDrinksCheckboxChange, selectedDrinks, changeQuantity, quantity}) => {
 

    return (
        
            <View style= {styles.container}>
                <View style={styles.imgContainer}>
                    <Image resizeMode="cover" source={{uri: item.image}} style={styles.img}/>
                    <View style={styles.priceContainer}>
                        <View style={styles.quantityContainer}>
                            <TouchableOpacity onPress={()=>changeQuantity('dec')}>
                                <Entypo name="minus" size={24} color="black" />
                            </TouchableOpacity>
                            <Text style={styles.quantity}>{quantity}</Text>
                            <TouchableOpacity onPress={()=>changeQuantity('increase')}>
                                <Entypo name="plus" size={24} color="black" />
                            </TouchableOpacity>
                            
                        </View>
                        <View style={styles.amountContainer}>
                            <Text style={styles.price}>N{item.price}.00</Text>
                        </View>   
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{item.name}</Text>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <View>
                            <Text>Select your preferred protein</Text>
                            <FlatList
                            data={item.protein}
                            renderItem={({item}) => (
                                <View>
                                    <CheckBox
                                    checked={selectedProtein.includes(item)}
                                    onPress={() => handleProteinCheckboxChange(item)}
                                        title={`${item.name}   -    ${item.price}`}
                                    />
                                </View>
                            
                            )}
                            keyExtractor={item=> item.index}
                            
                            />
                        </View>
                         
                         <View>
                            <Text>What drink would you like with your meal</Text>
                            <FlatList
                            data={item.drinks}
                            renderItem={({item}) => (
                                <View>
                                    <CheckBox
                                        checked={selectedDrinks.includes(item)}
                                        onPress={() => handleDrinksCheckboxChange(item)}
                                        title={`${item.name}   -    ${item.price}`}
                                    />
                                </View>
                            
                            )}
                            keyExtractor={item => item._id}
                            
                            />
                         </View>
                         <TouchableOpacity onPress={() => handleSubmit()}>
                            <Text>submit</Text>
                         </TouchableOpacity>
                         
                    </View>
                   
           
             </View>   
             
                
            

            
            </View>
          
       
       
    )
}

const styles =StyleSheet.create({
    container: {
        
    },
    img: {
       width: 400,
       height: 250
    },
    imgContainer: {
        
    },
    descriptionContainer: {
      padding: 10,
      backgroundColor: COLORS.lightWhite,
      marginTop: 10,
      height: '100%'
    },
    quantity: {
        fontFamily: FONTS.bold,
        fontSize: SIZES.large
    },
    quantityContainer: {
      
        flexDirection: 'row',
        width: 100,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: COLORS.lightWhite,
        justifyContent: 'space-around',
        marginRight: 120,
        marginLeft: 20
        
    },
   priceContainer: {
       flexDirection: 'row',
         position: 'absolute',
         justifyContent: "space-between",
        
         left: 1,
         top: 220,
         zIndex: 2,
   },
    title: {
        fontFamily: FONTS.bold,
        fontSize: SIZES.xLarge,
        textAlign: 'center',
        
    },
    description: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.medium,
        textAlign: 'center',
        marginTop: 10
    },
    amountContainer:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    price: {
        fontFamily: FONTS.bold,
        fontSize: SIZES.xLarge,
        width: 100,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: COLORS.lightWhite,
      
        paddingLeft: 10
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#109685',
        paddingHorizontal: 20,
        paddingBottom: 10,
        paddingTop: 5,
        borderTopWidth: 1,
        borderTopColor: '#ccc'
    },
    
    
})

export default ProductDetailsCard