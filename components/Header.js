import { StyleSheet,View, Text } from "react-native";

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My Todo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height: 60,
        paddingTop: 8,
        marginTop: 48,
        justifyContent: 'center',
        backgroundColor: 'coral'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }

})