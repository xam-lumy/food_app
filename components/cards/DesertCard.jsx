import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { COLORS, SIZES, FONTS  } from "../../constants";


const DesertCard = ({item}) => {
     
   
        
        return (
            <TouchableOpacity style={styles.container} >
                
                <TouchableOpacity style={styles.imgContainer}>
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
            paddingLeft: 10
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
    
    

export default DesertCard;