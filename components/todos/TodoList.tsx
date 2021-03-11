import { Checkbox } from 'antd';
import React, { useEffect, useState } from 'react';
import { getTodos } from '../../commons/actions/todos.action';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const checkTodo = (id) => {};

  const fetchData = async () => {
    try {
      const fetchedTodos = await getTodos();
      setTodos(fetchedTodos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [todos]);

  console.log(todos);
  return (
    <div>
      {Object.values(todos).map((todo) => {
        <Checkbox onChange={() => checkTodo(todo.id)}>{todo.desc}</Checkbox>;
      })}
    </div>
  );
};

export default TodoList;
