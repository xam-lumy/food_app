import { Text, View, TouchableOpacity, StyleSheet, FlatList } from "react-native";

import { getDesertData } from "../../../../app/config/config";
import { AntDesign } from '@expo/vector-icons';
import { SIZES, FONTS, COLORS } from "../../../../constants";
import DesertCard from "../../../cards/DesertCard";
import { desertt } from "../../../../data";
import { useEffect, useState} from "react";


const Desert = () => {
   
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Find your tasty desert here</Text>
                <AntDesign name="arrowright" size={15} color="gray" />
            </View>
            <View style={styles.cardsContainer}>
            <FlatList
            data={desertt}
            renderItem={({item}) => (
                <DesertCard item={item} />
            )}
                keyExtractor={(item) => item.id}
            horizontal
            contentContainerStyle={{paddingHorizontal: 15}}
            showsHorizontalScrollIndicator={false}
        
            />
        </View>
         
    
        </View>
    )  
}

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.medium,
        flex: 1
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 5,
        paddingBottom: 15
    
      },
      headerTitle: {
        fontSize: SIZES.large,
        fontFamily: FONTS.medium,
        color: COLORS.primary,
      },
      
      text: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.large
      }
})

export default Desert;