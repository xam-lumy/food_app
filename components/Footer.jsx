import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { SIZES, FONTS, COLORS } from "../constants";

const Footer = ({handleSubmit}) => {

    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
                <Text style={styles.buttonText}>Add To basket</Text>
            </TouchableOpacity>

        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
      
       
       
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
      },
    button: {
        width: '100%',
        backgroundColor: '#109685',
        alignItems: 'center',
        padding: 10,
       
    },
    buttonText: {
        color: COLORS.lightWhite,
        fontSize: SIZES.large,
        fontFamily: FONTS.bold
    }
    
})

export default Footer;