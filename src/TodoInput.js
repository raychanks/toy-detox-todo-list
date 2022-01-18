import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Button } from 'react-native';

const TodoInput = ({ onPress }) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = () => {
    setTodo('');
    onPress(todo);
  };

  return (
    <View style={styles.container}>
      <TextInput
        testID="todo-input"
        style={styles.input}
        value={todo}
        onChangeText={setTodo}
      />
      <Button title="submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 12,
    flex: 1,
  },
});

export default TodoInput;
