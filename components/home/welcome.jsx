import { Text, View, TextInput, StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS} from '../../constants'
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 



const Welcome = () => {

    return (
        <View style={styles.Welcontainer}>
            <View>
                <TextInput style={styles.textInput} />
                <FontAwesome style={styles.icon}
                 name="search" size={24} color="black" />
            </View>
            
        </View>
            

        
    )
}

const styles = StyleSheet.create({
    Welcontainer: {
        
        width: '100%',
        justifyContent: 'center'
    },
    textInput: {
       backgroundColor: '#fff',
       paddingTop: 10,
       borderRadius: 15,
       width: 320,
       marginLeft: 8
    },
    icon: {
        position: 'absolute',
        top: 5,
        left: 15
    },
    infoContainer: {
        backgroundColor: COLORS.lightWhite,
        padding: 20,
    },
    infoText: {
       
        fontSize: SIZES.medium,
        fontFamily: FONTS.regular,
        paddingLeft: 10
    },
    infoAlign: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: COLORS.gray,
        paddingTop: 10,
        marginTop: 5
    }
})


export default Welcome;