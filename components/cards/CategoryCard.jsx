import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { foods } from "../../data";
import { COLORS, FONTS, SIZES, SHADOWS } from "../../constants";

const CategoryCard = ({item, onPress}) => {
     
    return (
       
          
            <TouchableOpacity style={styles.container} onPress={() => onPress(item)}>
                <View style={styles.imgContainer}>
                    <Image source={item.image} style={styles.image} />
                 </View>
                 <Text style={styles.text}>{item.title}</Text>
                
                
            </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    container: {
        width: 150,
      
      
       justifyContent: 'center',
       alignItems: 'center',
        padding: SIZES.large,
        backgroundColor:"#FFF",
        borderRadius: SIZES.medium,
        ...SHADOWS.medium,
        shadowColor: COLORS.white,
    },
    imgContainer: {
        width: 110,
        height: 90,
        borderBottomWidth: 1
        
    },
    image: {
        width: '90%',
        height: '90%',
        
    },
    text: {
        
        fontFamily: FONTS.regular,
        fontSize: SIZES.large,
        marginTop: 5,
        
        
    },
    

})

export default CategoryCard