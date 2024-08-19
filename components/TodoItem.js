import {Pressable, StyleSheet, Text } from 'react-native'

const TodoItem = (props) => {

    function handleDelete() {
        props.onDelete(props.todoId);
    }

    return (
        <Pressable onPress={handleDelete}>
            <Text style={styles.todo}>{props.text}</Text>
        </Pressable>
    );
}

export default TodoItem;


const styles = StyleSheet.create({
    todo: {
        fontSize: 20,
        textAlign: 'center',
        borderWidth: 1,
        marginBottom: 10,
        borderColor: '#cccccc',
        backgroundColor: '#FF0079FF',
        color: 'white',
        padding: 10,
        borderRadius: 200,
        fontSize: 20
    }
})
