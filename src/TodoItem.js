import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const TodoItem = ({ todo, toggleTodo }) => {
  const getText = () => {
    if (todo.done) {
      return `${todo.title} (DONE)`;
    }

    return todo.title;
  };

  return (
    <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
      <Text>{getText()}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default TodoItem;
