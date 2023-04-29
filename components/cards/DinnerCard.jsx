import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { FONTS, COLORS, SIZES } from "../../constants";


const DinnerCard = ({item, handleChange}) => {
    
    return (
        <TouchableOpacity style={styles.container} onPress={() => handleChange(item)}>
            
            <TouchableOpacity style={styles.imgContainer} onPress={() => handleChange(item)}>
                <Image source={{uri:item.image}} style={styles.img} />
            </TouchableOpacity>
            <View>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>N{item.price}00.00</Text>
            </View>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        width: '50%',
        marginTop: 10,
        margin: 5
    },
    imgContainer: {
        
    },
    img: {
       width: '100%',
       height: 200,
      
     

    },
    
    imgContainer: {
        
    },
    img: {
       width: '100%',
       height: 200,
    },
    text: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.medium,
        marginTop: 10,
        paddingLeft: 10
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10
    },
    
    details: {
       width: 10,
       height: 20,
       paddingTop: 20
    }
    

})




export default DinnerCard;