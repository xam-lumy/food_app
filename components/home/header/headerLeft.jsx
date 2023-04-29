import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 


const HeaderLeftBtn = ({ handlePress}) => {

    return (
        <TouchableOpacity onPress={handlePress}>
            <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
    )
}

export default HeaderLeftBtn