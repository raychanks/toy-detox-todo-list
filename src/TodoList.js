import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <FlatList
      testID="todo-list"
      style={styles.list}
      data={todos}
      renderItem={({ item }) => {
        return <TodoItem todo={item} toggleTodo={toggleTodo} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

export default TodoList;
