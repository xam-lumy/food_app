import { Text, View, TouchableOpacity, StyleSheet, FlatList, Image } from "react-native";
import { useRouter } from "expo-router";
import { getTogether } from "../../../../data";
import GetTogetherCard from "../../../cards/GetTogetherCard";
import { AntDesign } from '@expo/vector-icons';
import { SIZES, FONTS, COLORS, images } from "../../../../constants";


const GetTogether = () => {
    const router = useRouter()
    const handleDinner = () => router.push('/dinner')
    return (
        <TouchableOpacity style={styles.container} onPress={() => handleDinner()}>
            <Text style={styles.headerTitle}>We cover your choice of dinner</Text>
            <View style={styles.detailsContainer}>
                <View>
                    <Image source={images.lightMeal} />
                </View>
                <Text style={styles.text}>Indulge in your desires after a stressful day while enjoying aunique price reduction</Text>
            </View>
        
            
        </TouchableOpacity>
    )  
}

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.medium,
        flex: 1
    },
    detailsContainer: {
        backgroundColor: '#fff',
        width: 329,
        height: 270
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
        fontFamily: FONTS.regular,
        color: COLORS.primary,
        paddingBottom: 10
      },
      
      text: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.medium
      }
})

export default GetTogether;