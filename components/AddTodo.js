import { use, useState } from 'react'
import { TouchableOpacity, Text, View, TextInput, Button, StyleSheet } from 'react-native'

export default function AddTodo({submitHandler}){
    const [text, setText] = useState();
    const changeHandler = (val) => {
        setText(val);
    }

return(
   <View>
        <TextInput 
            style={styles.input}
            placeholder='New todo...'
            onChangeText={(val) => changeHandler(val)}
        />
        <Button onPress={()=> submitHandler(text)} color='coral' title='Add todo' />
    </View>

 )   
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'

    }
})