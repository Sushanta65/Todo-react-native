import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native'

const ItemList = ({item, pressHandler}) => {
    return (
        <View style={styles.item}>
            <Text >{item.title}</Text>
            <Button onPress={() => pressHandler(item.key)} style={styles.btn} title="Delete"/>
        </View>
    )
}
export default ItemList;

const styles = StyleSheet.create({
     item: {
        padding: 16,
        marginTop: 16,
        border: ' 1px dashed #777',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    btn: {
        backgroundColor: 'red'
    }
})