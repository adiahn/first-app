import { StyleSheet,View, Text, TouchableOpacity } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function TodoItem({item, pressHandler}){
    return(
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name="delete" size={24} color="black" />
                <Text >{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16, 
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
        gap: 10
    }
})