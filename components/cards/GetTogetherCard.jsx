import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../constants";


const GetTogetherCard = ({item}) => {
   


    return (
        <TouchableOpacity style={styles.container} >
            
            <TouchableOpacity style={styles.imgContainer}>
                <Image source={{uri:item.image}} style={styles.img} />
            </TouchableOpacity>
            <View>
                <Text style={styles.text}>{item.name}</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.textPrice}>N{item.price}00.00</Text>
                
            </View>
            <TouchableOpacity style={styles.details}>
                <Text>Show details</Text>
            </TouchableOpacity>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 5,
        flex: 1 
    },
    imgContainer: {
        
    },
    img: {
       width: '100%',
       height: 200,
    },
    text: {
        fontFamily: FONTS.bold,
        fontSize: SIZES.medium,
        marginTop: 10,
        padding: 10
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10
    },
    textPrice: {
        fontFamily: FONTS.bold,
        fontSize: SIZES.medium
    },
    details: {
       width: 10,
       height: 20,
       paddingTop: 20
    }
})

export default GetTogetherCard;