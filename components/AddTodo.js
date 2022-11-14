import { useState } from 'react'
import { View, TextInput, Button, StyleSheet} from 'react-native'

const AddTodo = ({addTodo}) => {
    const [text, setText] = useState('')
    const handleChange = (val) => {
        setText(val)
    }
    
    return (
        <View>
            <TextInput style={styles.input} placeholder='Add New Todo' value={text} onChangeText={handleChange}/>
            <Button onPress={() => addTodo(text, setText)} color="coral" title="Add Todo" />
        </View>
    )
}

export default AddTodo;

const styles = StyleSheet.create({
    input: {
        padding: 10,
        border: '1px solid #999',
        borderRadius: 5,
        marginBottom: 10
    }
})