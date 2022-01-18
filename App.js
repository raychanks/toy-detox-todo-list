import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import TodoInput from './src/TodoInput';
import TodoList from './src/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(1);

  const addTodo = title => {
    setTodos(prev => [
      ...prev,
      {
        id: counter,
        done: false,
        title,
      },
    ]);
    setCounter(prev => prev + 1);
  };

  const toggleTodo = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done,
        };
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <TodoInput onPress={addTodo} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});
