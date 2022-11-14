import {View, Text, StyleSheet} from 'react-native';

const Header = ({todoLen}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
            <Text style={styles.todoLen}>{todoLen? todoLen : 'You have not any todo list. Please Add a Todo'}</Text>
        </View>
    )
}
export default Header;

const styles = StyleSheet.create({
    header: {
        paddingBottom: 10, 
        paddingTop: 15,
        backgroundColor: 'coral',
        textAlign: 'center'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    todoLen: {
        fontSize: 20,
        color: '#fff'
    }
})